import React from 'react';
import Food from '../models/Food';

const FoodPictures = ({ item }) => (
  <div>
    <div>{item.name}</div>
  </div>
);

FoodPictures.propTypes = {
  item: Food.shape.isRequired,
};

export default FoodPictures;
