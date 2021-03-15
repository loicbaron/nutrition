
import PropTypes from 'prop-types';

export default class Portion {
  static empty() {
    return new Portion({
      letter: '',
      type: '',
      image: '',
      weight: 0,
      position: 0,
    });
  }

  static from(
    letter,
    type,
    image,
    weight,
    position,
  ) {
    return new Portion({
      letter,
      type,
      image,
      weight,
      position,
    });
  }

  static fromBlob(blob) {
    return new Portion({
      ...blob,
    });
  }

  constructor({
    letter = '',
    type = '',
    image = '',
    weight = 0,
    position = 0,
  }) {
    this.letter = letter;
    this.type = type;
    this.image = image;
    this.weight = weight;
    this.position = position;
  }

  static get shape() {
    return PropTypes.shape({
      letter: PropTypes.string,
      type: PropTypes.string,
      image: PropTypes.string,
      weight: PropTypes.number,
      position: PropTypes.number,
    });
  }
}
