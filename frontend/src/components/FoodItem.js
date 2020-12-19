import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Food from '../models/Food';
import FoodPicturesContainer from '../containers/FoodPicturesContainer';
import './FoodItem.css';

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
      <Typography gutterBottom variant="h6" component="h6" key={item.name} className="food-item-name">
        {item.name}
      </Typography>
      <Paper className={classes.paper}>
        <FoodPicturesContainer item={item} />
      </Paper>
    </div>
  );
};

FoodItem.propTypes = {
  item: Food.shape.isRequired,
};

export default FoodItem;
