import {connect} from 'react-redux';
import ListView from './ListView';

export default connect(
  state => ({
    scheduledWorkouts: state.getIn(['scheduledWorkoutsList', 'scheduledWorkouts']),
    loading: state.getIn(['scheduledWorkoutsList', 'loading']),
    error: state.getIn(['scheduledWorkoutsList', 'error'])
  })
)(ListView);
