import { connect } from 'react-redux';
import PersonDetails from '../components/PersonDetails';
import { selectAge, resetAge } from '../store/Person/personActions';

const mapStateToProps = state => ({
  age: state.personAge,
});

const mapDispatchToProps = dispatch => ({
  selectAge: age => dispatch(selectAge(age)),
  resetAge: () => dispatch(resetAge()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
