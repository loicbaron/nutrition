import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Food from '../models/Food';
import FoodPictures from './FoodPictures';

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
      <Typography gutterBottom variant="h5" component="h3" key={item.name}>
        {item.name}
      </Typography>
      <Paper className={classes.paper}>
        <FoodPictures item={item} />
      </Paper>
    </div>
  );
};

FoodItem.propTypes = {
  item: Food.shape.isRequired,
};

export default FoodItem;
