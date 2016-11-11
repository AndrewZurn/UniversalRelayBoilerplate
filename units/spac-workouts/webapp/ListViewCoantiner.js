import {connect} from 'react-redux';
import ListView from './ListView';

export default connect(
  state => ({
    workouts: state.getIn(['workoutsList', 'workouts']),
    loading: state.getIn(['workoutsList', 'loading']),
    error: state.getIn(['workoutsList', 'error'])
  })
)(ListView);
