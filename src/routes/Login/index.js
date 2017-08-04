import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
