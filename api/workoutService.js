import * as api from './api';
import * as configuration from '../configuration/webapp/configuration';
import moment from 'moment';

const API_FAILED_REQUEST_WARNING = configuration.getConfiguration('API_FAILED_REQUEST_WARNING_MESSAGE');
const BASE_PATH = configuration.getConfiguration('WORKOUTS_PATH');
const BY_ID_PATH = workoutId => BASE_PATH + `/${workoutId}`;

export async function getWorkouts() {
  return api.get(BASE_PATH, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts. Error: ${error}`));
}

/**
 * Search for an workout with a given id
 * @param id {UUID} the id of the workout to find.
 * @returns {Promise}
 */
export async function getWorkout(id) {
  return api.get(BY_ID_PATH(id), API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts(${id}. Error: ${error}`));
}

export async function createWorkout(workout) {
  return api.post(BASE_PATH, workout, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}

export async function updateWorkout(workout) {
  return api.post(BY_ID_PATH(workout.id), workout, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}
