import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import * as UserService from '../../../api/userService';

// Initial state
const initialState = Map({
  users: [],
  loading: false,
  error: null
});

// ACTIONS
const GET_USERS_REQUEST = 'USER_LIST_STATE/GET_USERS_REQUEST';
const GET_USERS_RESPONSE = 'USER_LIST_STATE/GET_USERS_RESPONSE';

export function getWorkoutsRequest() {
  return {type: GET_USERS_REQUEST};
}

async function getWorkouts() {
  return {
    type: GET_USERS_RESPONSE,
    payload: await UserService.getUsers()
  };
}

// REDUCERS
export default function UsersListStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case GET_USERS_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(getWorkouts)
      );

    case GET_USERS_RESPONSE:
      if (action.payload && action.payload.error) {
        return state
          .set('loading', false)
          .set('error', action.payload.error);
      } else {
        return state
          .set('loading', false)
          .set('workouts', action.payload);
      }

    default:
      return state;
  }
}
