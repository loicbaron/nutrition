import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from '@material-ui/core';
import Food from '../models/Food';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: 'A',
  },
  {
    value: 2,
    label: 'B',
  },
  {
    value: 3,
    label: 'C',
  },
  {
    value: 4,
    label: 'D',
  },
  {
    value: 5,
    label: 'E',
  },
  {
    value: 6,
    label: 'F',
  },
  {
    value: 7,
    label: 'G',
  },
];
function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks[marks.findIndex(mark => mark.value === value)].label;
}
const QuantitySlider = (props) => {
  const {
    keys, item, onSelect, currentQuantity,
  } = props;
  const myMarks = marks.filter(mark => keys.includes(mark.label));
  return (
    <Slider
      value={currentQuantity}
      getAriaValueText={valuetext}
      valueLabelFormat={valueLabelFormat}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={1}
      marks={myMarks}
      min={0}
      max={myMarks.length - 1}
      onChangeCommitted={(ev, val) => onSelect(item.id, val)}
    />
  );
};

QuantitySlider.propTypes = {
  item: Food.shape.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  currentQuantity: PropTypes.number,
};

QuantitySlider.defaultProps = {
  keys: [],
  currentQuantity: 0,
};

export default QuantitySlider;
