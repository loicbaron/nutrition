import React from 'react';
import PropTypes from 'prop-types';

import Consumption from '../models/Consumption';

const MyConsumption = ({
  consumption, age, resetAge, resetAllPortions,
}) => {
  console.log('consumption.result', consumption.result);
  console.log('age', age);
  return (<p>Bilan de consommation: {JSON.stringify(consumption.result)}</p>);
};

MyConsumption.propTypes = {
  consumption: Consumption.shape.isRequired,
  age: PropTypes.string.isRequired,
  resetAge: PropTypes.func.isRequired,
  resetAllPortions: PropTypes.func.isRequired,
};

export default MyConsumption;
