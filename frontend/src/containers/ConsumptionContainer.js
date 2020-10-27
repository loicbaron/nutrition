import { connect } from 'react-redux';
import MyConsumption from '../components/MyConsumption';
import { resetAge } from '../store/Person/personActions';
import { resetConsumption } from '../store/Consumption/consumptionActions';

const mapStateToProps = state => ({
  age: state.personAge,
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAge: () => dispatch(resetAge()),
  resetConsumption: () => dispatch(resetConsumption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyConsumption);
