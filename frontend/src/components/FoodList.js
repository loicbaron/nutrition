import React from 'react';
import PropTypes from 'prop-types';
import Food from '../models/Food';
import FoodItem from './FoodItem';

const FoodList = ({ categoryId, foodItems }) => (
  <div key={categoryId}>
    {
    foodItems.map(item => <FoodItem key={item.id} item={item} />)
    }
  </div>
);

FoodList.propTypes = {
  categoryId: PropTypes.number,
  foodItems: PropTypes.arrayOf(Food.shape).isRequired,
};

FoodList.defaultProps = {
  categoryId: undefined,
};

export default FoodList;
