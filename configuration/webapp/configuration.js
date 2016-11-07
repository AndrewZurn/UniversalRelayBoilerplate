import {Map} from 'immutable';

let baseConfig = {
  USERS_PATH: '/users',
  WORKOUTS_PATH: '/workouts',
  SCHEDULED_WORKOUTS_PATH: '/scheduled-workouts'
};

let localConfig = Map({
  ...baseConfig,
  API_ROOT: 'http://localhost:8080'
});

let prodConfig = Map({
  ...baseConfig,
  API_ROOT: `${API_ROOT}`
});

let configuration = getConfig();

export function setConfiguration(name, value) {
  configuration = configuration.set(name, value);
}

export function setAll(properties) {
  configuration = configuration.merge(properties);
}

export function unsetConfiguration(name) {
  configuration = configuration.delete(name);
}

export function getConfiguration(key) {
  if (!configuration.has(key)) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration.get(key);
}

function getConfig() {
  if (process.env.NODE_ENV == 'production') {
    return prodConfig;
  } else {
    return localConfig;
  }
}
