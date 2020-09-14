import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Category from '../models/Category';
import FoodListContainer from '../containers/FoodListContainer';

const CategoryList = ({ className, categories }) => (
  <div className={className}>
    {
    categories.map(category => (
      <div key={category.id} className={className}>
        <Typography gutterBottom variant="h5" component="h2" key={category.name}>
          {category.name}
        </Typography>
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
