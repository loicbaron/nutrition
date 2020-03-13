import React from 'react';
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
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks[marks.findIndex(mark => mark.value === value)].label;
}
const FoodItem = ({ item }) => (
  <div>
    <div>{item.name}</div>
    <div>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={7}
      />
    </div>
  </div>
);

FoodItem.propTypes = {
  item: Food.shape.isRequired,
};

export default FoodItem;
