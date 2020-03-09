import React, { Component } from 'react';
import './Home.css';
import { FormattedMessage } from 'react-intl';
import CategoryList from '../components/CategoryList';
import fetchService from '../services/fetchService';
import Category from '../models/Category';
import { CircularProgress } from '@material-ui/core';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: false,
      error: undefined,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  reset() {
    this.setState({ categories: [], isLoading: false, error: undefined });
  }

  async fetchCategories() {
    this.reset();
    this.setState({ isLoading: true });
    try {
      const result = await fetchService('categories', 'GET');
      this.setState(
        {
          isLoading: false,
          categories: result.map(category => Category.fromBlob(category)),
        },
      );
    } catch (err) {
      this.setState({ isLoading: false, categories: [], error: 'Error.backend' });
    }
  }

  render() {
    const { categories, isLoading, error } = this.state;
    return (
      <div className="home">
        { error ? <div className="error"><FormattedMessage id={error} /></div> : <React.Fragment /> }
        <div className="home-row">
          <React.Fragment>
            { isLoading
              ? <div className="center"><CircularProgress /></div>
              : <CategoryList className="" categories={categories} />
            }
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Home;
