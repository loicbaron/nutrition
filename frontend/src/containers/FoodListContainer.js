import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CircularProgress } from '@material-ui/core';
import fetchService from '../services/fetchService';
import Food from '../models/Food';
import FoodList from '../components/FoodList';

class FoodListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
      isLoading: false,
      error: undefined,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  reset() {
    this.setState({ foodItems: [], isLoading: false, error: undefined });
  }

  async fetchCategories() {
    this.reset();
    this.setState({ isLoading: true });
    const { categoryId } = this.props;
    try {
      const result = await fetchService(`categories/${categoryId}/food`, 'GET');
      this.setState(
        {
          isLoading: false,
          foodItems: result.map(item => Food.fromBlob(item)),
        },
      );
    } catch (err) {
      this.setState({ isLoading: false, foodItems: [], error: 'Error.backend' });
    }
  }

  render() {
    const { foodItems, isLoading, error } = this.state;
    return (
      <div className="home">
        { error ? <div className="error"><FormattedMessage id={error} /></div> : <React.Fragment /> }
        <React.Fragment>
          { isLoading
            ? <div className="center"><CircularProgress /></div>
            : <FoodList foodItems={foodItems} />
          }
        </React.Fragment>
      </div>
    );
  }
}
FoodListContainer.propTypes = {
  categoryId: PropTypes.number.isRequired,
};

export default FoodListContainer;
