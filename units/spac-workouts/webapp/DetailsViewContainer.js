import {connect} from 'react-redux';
import DetailView from './DetailsView';

export default connect(
  state => ({
    workout: state.getIn(['workoutDetails', 'workout']),
    loading: state.getIn(['workoutDetails', 'loading']),
    error: state.getIn(['workoutDetails', 'error'])
  })
)(DetailView);
