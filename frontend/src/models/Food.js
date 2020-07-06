
import PropTypes from 'prop-types';

export default class Food {
  static empty() {
    return new Food({
      id: 0,
      name: '',
      images: '',
      portions: '',
    });
  }

  static from(
    id,
    name,
    images,
    portions,
  ) {
    return new Food({
      id,
      name,
      images,
      portions,
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
    images = '',
    portions = '',
  }) {
    this.id = id;
    this.name = name;
    this.images = images;
    this.portions = portions;
  }

  static get shape() {
    return PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      images: PropTypes.string,
      portions: PropTypes.string,
    });
  }
}
