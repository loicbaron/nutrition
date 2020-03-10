import React from 'react';
import PropTypes from 'prop-types';

import './Clickable.css';

import { anyNumberOfChildren } from '../miscellaneousProps';

const ENTER = 13;

class Clickable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleClick(e) {
    const { handleClick } = this.props;
    e.stopPropagation();
    handleClick();
  }

  handleOnKeyDown(event) {
    if (event.keyCode === ENTER) {
      const { handleClick } = this.props;
      handleClick();
    }
  }

  render() {
    const {
      children, handleClick, className, ...ownProps
    } = this.props;
    return (
      <div
        aria-controls="button"
        aria-haspopup="true"
        onClick={this.handleClick}
        onKeyDown={this.handleOnKeyDown}
        role="button"
        tabIndex={0}
        className={`clickable-div ${className}`}
        {...ownProps}
      >
        {children}
      </div>
    );
  }
}

Clickable.propTypes = {
  children: anyNumberOfChildren.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Clickable.defaultProps = {
  className: '',
};

export default Clickable;
