
import PropTypes from 'prop-types';

export default class Food {
  static empty() {
    return new Food({
      id: 0,
      name: '',
    });
  }

  static from(
    id,
    name,
  ) {
    return new Food({
      id,
      name,
    });
  }

  static fromBlob(blob) {
    return new Food({
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
