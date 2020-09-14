import React from 'react';
import PropTypes from 'prop-types';


const Consumption = ({consumption, age, resetAge, resetConsumption}) => (<p>Bilan de consommation</p>);

Consumption.propTypes = {
  consumption: PropTypes.object.isRequired,
  age: PropTypes.string.isRequired,
  resetAge: PropTypes.func.isRequired,
  resetConsumption: PropTypes.func.isRequired,
};

export default Consumption;
