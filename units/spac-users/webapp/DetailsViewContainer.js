import {connect} from 'react-redux';
import DetailView from './DetailsView';

export default connect(
  state => ({
    user: state.getIn(['userDetail', 'user']),
    remainingWorkouts: state.getIn(['userDetail', 'remainingWorkouts']),
    loading: state.getIn(['userDetail', 'loading']),
    error: state.getIn(['userDetail', 'error'])
  })
)(DetailView);
