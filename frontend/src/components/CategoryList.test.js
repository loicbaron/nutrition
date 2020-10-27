import React from 'react';
import CategoryList from './CategoryList';
import Category from '../models/Category';

describe('CategoryList', () => {
  it('renders CategoryList correctly', () => {
    const subject = <CategoryList />;
    expect(subject).toMatchSnapshot();
  });
  it('renders CategoryList with empty Category correctly', () => {
    const subject = <CategoryList categories={[Category.empty()]} />;
    expect(subject).toMatchSnapshot();
  });
});
