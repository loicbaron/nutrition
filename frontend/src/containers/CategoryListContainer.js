import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import CategoryList from '../components/CategoryList';
import fetchService from '../services/fetchService';
import Category from '../models/Category';
import '../components/Home.css';
import AddItemsContainer from './AddItemsContainer';


class CategoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      error: undefined,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  reset() {
    this.setState({ categories: [], error: undefined });
  }

  async fetchCategories() {
    this.reset();
    try {
      const result = await fetchService('categories', 'GET');
      this.setState(
        {
          categories: result.map(category => Category.fromBlob(category)),
        },
      );
    } catch (err) {
      this.setState({ categories: [], error: 'Error.backend' });
    }
  }

  render() {
    const { categories, error } = this.state;
    return (
      <div className="home">
        { error ? <div className="error"><FormattedMessage id={error} /></div> : <React.Fragment /> }
        <div className="home-row">
          <React.Fragment>
            <CategoryList className="full-width" categories={categories} />
            <AddItemsContainer />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
export default CategoryListContainer;
