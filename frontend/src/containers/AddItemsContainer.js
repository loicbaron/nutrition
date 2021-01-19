import React from 'react';
import { injectIntl } from 'react-intl';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import TooltipControlled from '../components/Navigation/TooltipControlled';
import { connect } from 'react-redux';
import { addSelectedPortions, resetAllPortions } from '../store/Consumption/consumptionActions';

const styles = theme => ({
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});
const AddItems = ({intl, classes, consumption, addSelectedPortions, resetAllPortions}) => {
    if (Object.keys(consumption.selected).length > 0) {
      return (
          <TooltipControlled
              title={intl.formatMessage({ id: "add.items.title" })}
              text={intl.formatMessage({ id: "add.items.text" })}
          >
              <Fab color="secondary" aria-label="add" className={classes.fabButton}
              onClick={() => { addSelectedPortions(); resetAllPortions(); }}>
              <AddIcon />
              </Fab>
          </TooltipControlled>
      );
    } else {
      return (
        <Fab disabled aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
      );
    }
};


const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAllPortions: () => dispatch(resetAllPortions()),
  addSelectedPortions: () => dispatch(addSelectedPortions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(injectIntl(AddItems)));
