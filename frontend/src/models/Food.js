
import PropTypes from 'prop-types';
import Portion from './Portion';

export default class Food {
  static empty() {
    return new Food({
      id: 0,
      name: '',
      images: '',
      portions: [],
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
    portions = [],
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
      portions: PropTypes.arrayOf(Portion.shape),
    });
  }
}

/*

portions: "[{"C": "312", "G": "620", "A": "149", "B": "230", "D": "393", "E": "469", "F": "544", "type": "child"}, {"C": "545", "G": "1140", "A": "241", "B": "393", "D": "697", "E": "845", "F": "992", "type": "adult"}]"

[
  {
  position: 1,
  letter: 'A',
  type: 'child',
  weight: 149,
  }
]
*/
