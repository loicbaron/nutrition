import React from 'react';
import PropTypes from 'prop-types';

import Consumption from '../models/Consumption';

const MyConsumption = ({
  consumption, age, resetAge, resetConsumption,
}) => (<p>Bilan de consommation</p>);

MyConsumption.propTypes = {
  consumption: Consumption.shape.isRequired,
  age: PropTypes.string.isRequired,
  resetAge: PropTypes.func.isRequired,
  resetConsumption: PropTypes.func.isRequired,
};

export default MyConsumption;
