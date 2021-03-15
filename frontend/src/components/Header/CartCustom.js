import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Consumption from '../../models/Consumption';
import CartWithBadge from '../Navigation/CartWithBadge';

const CartCustom = ({ consumption }) => (
  <React.Fragment>
    <FormattedMessage id="step.3" />
    <CartWithBadge num={Object.keys(consumption.result).length} />
  </React.Fragment>
);

const mapStateToProps = state => ({
  consumption: state.consumption,
});

CartCustom.propTypes = {
  consumption: Consumption.shape.isRequired,
};

export default connect(mapStateToProps, null)(CartCustom);
