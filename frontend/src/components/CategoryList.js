import React from 'react';
import PropTypes from 'prop-types';
import Category from '../models/Category';

const CategoryList = ({ className, categories }) => (
  <div className={className}>
    { 
    categories.map( category => {
      return <div key={category.id}>{category.name}</div>
    })
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
}

export default CategoryList;
