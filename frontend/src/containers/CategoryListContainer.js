import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CircularProgress, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import CategoryList from '../components/CategoryList';
import fetchService from '../services/fetchService';
import Category from '../models/Category';
import '../components/Home.css';
import { resetAllPortions } from '../store/Consumption/consumptionActions';


const styles = theme => ({
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

class CategoryListContainer extends Component {
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
    const { classes, resetAllPortions } = this.props;
    return (
      <div className="home">
        { error ? <div className="error"><FormattedMessage id={error} /></div> : <React.Fragment /> }
        <div className="home-row">
          <React.Fragment>
            { isLoading
              ? <div className="center"><CircularProgress /></div>
              : (
                <div><CategoryList className="full-width" categories={categories} />
                  <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={resetAllPortions}>
                    <AddIcon />
                  </Fab>
                </div>
              )
            }
          </React.Fragment>
        </div>
      </div>
    );
  }
}

CategoryListContainer.propTypes = {
  classes: PropTypes.shape({ fabButton: PropTypes.string.isRequired }).isRequired,
  resetAllPortions: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  resetAllPortions: () => dispatch(resetAllPortions()),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CategoryListContainer));
