import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import * as UserService from '../../../server/userService';

// Initial state
const initialState = Map({
  user: null,
  remainingWorkouts: null,
  loading: false,
  error: null
});

// ACTIONS
const GET_USER_BY_ID_REQUEST = 'USER_DETAIL_STATE/GET_USER_BY_ID_REQUEST';
const GET_USER_BY_ID_RESPONSE = 'USER_DETAIL_STATE/GET_USER_BY_ID_RESPONSE';

const GET_USER_REMAINING_WORKOUTS_REQUEST = 'USER_DETAIL_STATE/GET_USER_REMAINING_WORKOUTS_REQUEST';
const GET_USER_REMAINING_WORKOUTS_RESPONSE = 'USER_DETAIL_STATE/GET_USER_REMAINING_WORKOUTS_RESPONSE';

const CREATE_USER_REQUEST = 'USER_DETAIL_STATE/CREATE_USER_REQUEST';
const CREATE_USER_RESPONSE = 'USER_DETAIL_STATE/CREATE_USER_RESPONSE';

const UPDATE_USER_REQUEST = 'USER_DETAIL_STATE/UPDATE_USER_REQUEST';
const UPDATE_USER_RESPONSE = 'USER_DETAIL_STATE/UPDATE_USER_RESPONSE';

export function getUserByIdRequest(userId) {
  return {
    type: GET_USER_BY_ID_REQUEST,
    payload: userId
  };
}

async function getUserById(userId) {
  return {
    type: GET_USER_BY_ID_RESPONSE,
    payload: null // await get scheduled workout
  };
}

export function getUserRemainingWorkoutsRequest(userId) {
  return {
    type: GET_USER_REMAINING_WORKOUTS_REQUEST,
    payload: userId
  };
}

async function getUserRemainingWorkouts(userId) {
  return {
    type: GET_USER_REMAINING_WORKOUTS_RESPONSE,
    payload: null // await get scheduled workout
  };
}

export function createUserRequest(user) {
  return {
    type: CREATE_USER_REQUEST,
    payload: user
  };
}

async function createUser(user) {
  return {
    type: CREATE_USER_RESPONSE,
    payload: null // await save scheduled user
  }
}

export function updateUserRequest(user) {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user
  };
}

async function updateUser(user) {
  return {
    type: UPDATE_USER_RESPONSE,
    payload: null // await update scheduled user
  };
}

// REDUCERS
export default function UserDetailsStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case GET_USER_BY_ID_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(getUserById, action.payload)
      );

    case GET_USER_BY_ID_RESPONSE:
      handleSingleScheduledWorkoutReturn(action, state);

    case GET_USER_REMAINING_WORKOUTS_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(getUserRemainingWorkouts, action.payload)
      );

    case GET_USER_REMAINING_WORKOUTS_RESPONSE:
      if (action.payload && action.payload.error) {
        return state
          .set('loading', false)
          .set('error', action.payload.error);
      } else {
        return state
          .set('loading', false)
          .set('remainingWorkouts', action.payload);
      }

    case CREATE_USER_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(createUser, action.payload)
      );

    case CREATE_USER_RESPONSE:
      handleSingleScheduledWorkoutReturn(action, state);

    case UPDATE_USER_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(updateUser, action.payload)
      );

    case UPDATE_USER_RESPONSE:
      if (action.payload && action.payload.error) {
        return state
          .set('loading', false)
          .set('error', action.payload.error);
      } else {
        return state.set('loading', false);
      }

    default:
      return state;
  }
}

function handleSingleScheduledWorkoutReturn(action, state) {
  if (action.payload && action.payload.error) {
    return state
      .set('loading', false)
      .set('error', action.payload.error);
  } else {
    return state
      .set('loading', false)
      .set('user', action.payload);
  }
}
