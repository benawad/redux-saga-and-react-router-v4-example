import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestLogin } from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestLogin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(View);
