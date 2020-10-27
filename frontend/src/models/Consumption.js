
import PropTypes from 'prop-types';

export default class Consumption {
  static from(
    itemId,
    quantity,
  ) {
    return new Consumption({
      itemId,
      quantity,
    });
  }

  static fromBlob(blob) {
    return new Consumption({
      ...blob,
    });
  }

  constructor({
    itemId,
    quantity = 0,
  } = {}) {
    this.id = itemId;
    this.quantity = quantity;
  }

  static get shape() {
    return PropTypes.shape({
      itemId: PropTypes.number,
      quantity: PropTypes.number,
    });
  }
}
