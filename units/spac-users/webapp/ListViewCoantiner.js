import {connect} from 'react-redux';
import ListView from './ListView';

export default connect(
  state => ({
    users: state.getIn(['usersList', 'users']),
    loading: state.getIn(['usersList', 'loading']),
    error: state.getIn(['usersList', 'error'])
  })
)(ListView);
