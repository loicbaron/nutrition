import { connect } from 'react-redux';
import FoodPictures from '../components/FoodPictures';
import { selectPortion, resetPortion, resetAllPortions } from '../store/Consumption/consumptionActions';

const mapStateToProps = state => ({
  consumption: state.consumption,
  age: state.personAge,
});

const mapDispatchToProps = dispatch => ({
  selectPortion: (item, position, age) => dispatch(selectPortion(item, position, age)),
  resetPortion: item => dispatch(resetPortion(item)),
  resetAllPortions: () => dispatch(resetAllPortions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodPictures);
