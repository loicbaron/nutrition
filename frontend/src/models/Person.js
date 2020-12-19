
import PropTypes from 'prop-types';

export default class Person {
  static from(age) {
    return new Person({ age });
  }

  static fromBlob(blob) {
    return new Person({
      ...blob,
    });
  }

  constructor({
    age,
  } = {}) {
    this.age = age;
  }

  static get shape() {
    return PropTypes.shape({
      age: PropTypes.string,
    });
  }
}
