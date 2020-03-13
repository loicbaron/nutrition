import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Food from '../models/Food';
import FoodPictures from './FoodPictures';
import QuantitySlider from './QuantitySlider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '16px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '120px',
  },
}));

const FoodItem = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <FoodPictures item={item} />
          </Grid>
          <Grid item xs={3}>
            <QuantitySlider item={item} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

FoodItem.propTypes = {
  item: Food.shape.isRequired,
};

export default FoodItem;
