import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import ScheduledWorkoutsListStateReducer from '../../units/spac-scheduled-workouts/redux/ListState';
import ScheduledWorkoutDetailsStateReducer from '../../units/spac-scheduled-workouts/redux/DetailsState';
import WorkoutsListStateReducer from '../../units/spac-scheduled-workouts/redux/ListState';
import WorkoutDetailsStateReducer from '../../units/spac-scheduled-workouts/redux/DetailsState';
import UsersListStateReducer from '../../units/spac-users/redux/ListState';
import UserDetailsStateReducer from '../../units/spac-users/redux/DetailsState';

const reducers = {
  scheduledWorkoutsList: ScheduledWorkoutsListStateReducer,
  scheduledWorkoutDetails: ScheduledWorkoutDetailsStateReducer,

  workoutsList: WorkoutsListStateReducer,
  workoutDetails: WorkoutDetailsStateReducer,

  usersList: UsersListStateReducer,
  userDetails: UserDetailsStateReducer
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
