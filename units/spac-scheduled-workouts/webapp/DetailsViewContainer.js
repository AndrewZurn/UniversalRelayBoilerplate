import {connect} from 'react-redux';
import DetailView from './DetailsView';

export default connect(
  state => ({
    scheduledWorkout: state.getIn(['scheduledWorkoutsList', 'scheduledWorkout']),
    loading: state.getIn(['scheduledWorkoutsList', 'loading']),
    error: state.getIn(['scheduledWorkoutsList', 'error'])
  })
)(DetailView);
