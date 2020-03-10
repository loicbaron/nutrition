import React from 'react';
import PropTypes from 'prop-types';
import Category from '../models/Category';
import FoodListContainer from './FoodListContainer';

const CategoryList = ({ className, categories }) => (
  <div className={className}>
    {
    categories.map(category => (
      <div key={category.id}>
        <h3>{category.name}</h3>
        <FoodListContainer key={category.id} categoryId={category.id} />
      </div>
    ))
    }
  </div>
);

CategoryList.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(Category.shape),
};

CategoryList.defaultProps = {
  className: '',
  categories: [],
};

export default CategoryList;
