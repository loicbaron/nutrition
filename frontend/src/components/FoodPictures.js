import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Food from '../models/Food';
import QuantitySlider from './QuantitySlider';
import SimpleModal from './Navigation/SimpleModal';
import config from '../configs/config';
import Consumption from '../models/Consumption';

const FoodImage = (key, filename) => {
  if (filename !== null) {
    return (
      <Grid item xs={1} key={`image_${key}`}>
        <SimpleModal title={key}>
          <img src={`${config.photos}/adult/${filename}`} alt={filename} width="100%" />
        </SimpleModal>
      </Grid>
    );
  }
  return (<Grid item xs={1} key={`image_${key}`}> &nbsp; </Grid>);
};

const FoodPictures = ({
  item, selectPortion, consumption, age,
}) => {
  const img = JSON.parse(item.images).adult;
  const sortedLetters = Object.keys(img).sort();
  const sortedImages = {};
  sortedLetters.map((letter) => {
    sortedImages[letter] = img[letter]; return img[letter];
  });
  const images = [<Grid item xs={1} key="image_0"> &nbsp; </Grid>];
  const letters = [<Grid item xs={1} key="letter_0"> &nbsp; </Grid>];
  sortedLetters.forEach((letter) => {
    letters.push(<Grid item xs={1} key={letter}>{letter}</Grid>);
    images.push(FoodImage(letter, sortedImages[letter]));
  });
  const currentQuantity = consumption[item.id] ? consumption[item.id] : 0;
  return (
    <div style={{ width: '100%' }}>
        <Grid container justify="space-evenly">
          { images }
        </Grid>
        <Grid container justify="space-evenly">
            <QuantitySlider
              keys={sortedLetters}
              onSelect={position => selectPortion(item, position, age)}
              currentQuantity={currentQuantity}
            />
        </Grid>
    </div>
  );
};

FoodPictures.propTypes = {
  item: Food.shape.isRequired,
  consumption: Consumption.shape.isRequired,
  age: PropTypes.string.isRequired,
  selectPortion: PropTypes.func.isRequired,
};

export default FoodPictures;
