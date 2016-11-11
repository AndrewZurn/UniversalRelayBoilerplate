import * as api from './api';
import * as configuration from '../configuration/webapp/configuration';
import moment from 'moment';

const API_FAILED_REQUEST_WARNING = configuration.getConfiguration('API_FAILED_REQUEST_WARNING_MESSAGE');
const BASE_PATH = configuration.getConfiguration('SCHEDULED_WORKOUTS_PATH');
const BY_ID_PATH = id => BASE_PATH + `/${id}`;
const BY_DATE_PATH = date => BASE_PATH + `/by-date/${date}?active=true`;
const GET_WEEKS_REMAINING_PATH = BASE_PATH + '/week';
const UPDATE_STATUS_PATH = id => BY_ID_PATH(id) + '/update-status';

export async function getScheduledWorkouts() {
  return api.get(BASE_PATH, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts. Error: ${error}`));
}

export async function getScheduledWorkoutByDate(date) {
  return api.get(BY_DATE_PATH(date), API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkoutByDate. Error: ${error}`));
}

/**
 * Search for an workout with a given id
 * @param id {UUID} the id of the workout to find.
 * @returns {Promise}
 */
export async function getScheduledWorkout(id) {
  return api.get(BY_ID_PATH(id), API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts(${id}. Error: ${error}`));
}

export async function getWeeksRemainingScheduledWorkouts() {
  return api.get(GET_WEEKS_REMAINING_PATH, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}

export async function createScheduledWorkout(scheduledWorkout) {
  return api.post(BASE_PATH, scheduledWorkout, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}

export async function updateScheduledWorkoutStatus(scheduledWorkoutId) {
  return api.post(UPDATE_STATUS_PATH(scheduledWorkoutId), {}, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}
