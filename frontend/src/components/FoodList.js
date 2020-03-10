import React from 'react';
import PropTypes from 'prop-types';
import Food from '../models/Food';

const FoodList = ({ categoryId, foodItems }) => (
  <div key={categoryId}>
    {
    foodItems.map(item => <div key={item.id}>{item.name}</div>)
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
