import { connect } from 'react-redux';
import MyConsumptionReport from '../components/MyConsumptionReport';
import { resetAge } from '../store/Person/personActions';
import { resetAllPortions } from '../store/Consumption/consumptionActions';

const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAge: () => dispatch(resetAge()),
  resetAllPortions: () => dispatch(resetAllPortions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyConsumptionReport);
