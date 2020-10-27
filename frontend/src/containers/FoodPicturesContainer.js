import { connect } from 'react-redux';
import FoodPictures from '../components/FoodPictures';
import { addItemQuantity, removeItemQuantity, resetConsumption } from '../store/Consumption/consumptionActions';

const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  addItemQuantity: (itemId, quantity) => dispatch(addItemQuantity(itemId, quantity)),
  removeItemQuantity: itemId => dispatch(removeItemQuantity(itemId)),
  resetConsumption: () => dispatch(resetConsumption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodPictures);
