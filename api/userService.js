import * as api from './api';
import * as configuration from '../configuration/webapp/configuration';
import moment from 'moment';

const API_FAILED_REQUEST_WARNING = configuration.getConfiguration('API_FAILED_REQUEST_WARNING_MESSAGE');
const BASE_PATH = configuration.getConfiguration('USERS_PATH');
const BY_ID_PATH = id => BASE_PATH + `/${id}`;
const REMAINING_WORKOUTS_PATH = id => BY_ID_PATH(id) + '/remaining-workout-unlocks';

export async function getUsers() {
  return api.get(BASE_PATH, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts. Error: ${error}`));
}

export async function getUser(id) {
  return api.get(BY_ID_PATH(id), API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWorkouts(${workoutId}. Error: ${error}`));
}

export async function getUserRemainingWorkouts(id) {
  return api.get(REMAINING_WORKOUTS_PATH(id), API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}

export async function createUser(user) {
  return api.post(BASE_PATH, user, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}

export async function updateUser(user) {
  return api.post(BY_ID_PATH(user.id), user, API_FAILED_REQUEST_WARNING)
    .then(response => response.body)
    .catch(error => console.error(`Error during getWeeksRemainingWorkouts. Error: ${error}`));
}
