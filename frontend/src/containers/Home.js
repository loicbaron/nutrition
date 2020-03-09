import React, { Component } from 'react';
import './Home.css';
import CategoryList from '../components/CategoryList';
import fetchService from '../services/fetchService';
import Category from '../models/Category';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: false,
      error: undefined,
    }
  }
  reset() {
    this.setState({categories: [], isLoading: false, error: undefined});
  }
  componentDidMount() {
    this.fetchCategories();
  }
  async fetchCategories() {
    this.reset();
    this.setState({isLoading: true});
    try {
      const result = await fetchService('categories', 'GET');
      this.setState({isLoading: false, categories: result.map(category => Category.fromBlob(category))});
    } catch (err) {
      this.setState({isLoading: false, categories: [], error: "Error.backend"});
    }
  }
  render() {
    const { categories, isLoading, error } = this.state;
    return (
      <div className="home">
        <div className="home-row">
          { error ? <div className="error"><FormattedMessage id={error} /></div> : <React.Fragment /> }
        </div>
        <div className="home-row">
          <React.Fragment>
            { isLoading
              ? <div>LOADING...</div>
              : <CategoryList className="" categories={categories} />
            }
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Home;
