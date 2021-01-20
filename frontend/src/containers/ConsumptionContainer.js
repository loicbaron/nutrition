import { connect } from 'react-redux';
import MyConsumption from '../components/MyConsumption';
import { resetAge } from '../store/Person/personActions';
import { resetAllPortions } from '../store/Consumption/consumptionActions';

const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAge: () => dispatch(resetAge()),
  resetAllPortions: () => dispatch(resetAllPortions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyConsumption);
