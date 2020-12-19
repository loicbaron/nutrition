import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from '@material-ui/core';

const marks = [
  {
    value: 0,
    label: '0',
    width: '100%',
  },
  {
    value: 1,
    label: 'A',
    width: '36%',
  },
  {
    value: 2,
    label: 'B',
    width: '54%',
  },
  {
    value: 3,
    label: 'C',
    width: '65%',
  },
  {
    value: 4,
    label: 'D',
    width: '72%',
  },
  {
    value: 5,
    label: 'E',
    width: '78%',
  },
  {
    value: 6,
    label: 'F',
    width: '81%',
  },
  {
    value: 7,
    label: 'G',
    width: '85%',
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
    keys, onSelect, currentQuantity,
  } = props;
  const myMarks = marks.filter(mark => keys.includes(mark.label));
  const width = [...myMarks].pop().width;
  return (
    <div style={{'width': width}}>
      <Slider
        value={currentQuantity}
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={myMarks}
        min={0}
        max={myMarks.length}
        onChangeCommitted={(ev, val) => onSelect(val)}
      />
    </div>
  );
};

QuantitySlider.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  currentQuantity: PropTypes.number,
};

QuantitySlider.defaultProps = {
  keys: [],
  currentQuantity: 0,
};

export default QuantitySlider;
