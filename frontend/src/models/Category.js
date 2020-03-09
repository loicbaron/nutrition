
import PropTypes from 'prop-types';

export default class Category {
  static empty() {
    return new Category({
      id: 0,
      name: '',
    });
  }

  static from(
    id,
    name,
  ) {
    return new Category({
      id,
      name,
    });
  }

  static fromBlob(blob) {
    return new Category({
      ...blob,
    });
  }

  constructor({
    id = 0,
    name = '',
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static get shape() {
    return PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    });
  }
}
