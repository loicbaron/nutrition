import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import TooltipControlled from '../components/Navigation/TooltipControlled';
import { addSelectedPortions, resetAllPortions } from '../store/Consumption/consumptionActions';
import Consumption from '../models/Consumption';

const styles = theme => ({
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});
const AddItems = ({
  // eslint-disable-next-line no-shadow
  intl, classes, consumption, addSelectedPortions, resetAllPortions,
}) => {
  if (Object.keys(consumption.selected).length > 0) {
    return (
      <TooltipControlled
        title={intl.formatMessage({ id: 'add.items.title' })}
        text={intl.formatMessage({ id: 'add.items.text' })}
      >
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={() => { addSelectedPortions(); resetAllPortions(); }}
        >
          <AddIcon />
        </Fab>
      </TooltipControlled>
    );
  }
  return (
    <Fab disabled aria-label="add" className={classes.fabButton}>
      <AddIcon />
    </Fab>
  );
};


const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAllPortions: () => dispatch(resetAllPortions()),
  addSelectedPortions: () => dispatch(addSelectedPortions()),
});

AddItems.propTypes = {
  consumption: Consumption.shape.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  intl: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  addSelectedPortions: PropTypes.func.isRequired,
  resetAllPortions: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(injectIntl(AddItems)));
