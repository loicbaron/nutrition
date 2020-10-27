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

const FoodPictures = ({ item, addItemQuantity, consumption }) => {
  const img = JSON.parse(item.images).adult;
  const sortedLetters = Object.keys(img).sort();
  const sortedImages = {};
  sortedLetters.map((letter) => {
    sortedImages[letter] = img[letter]; return img[letter];
  });
  const images = [<Grid item xs={1} key="image_0"> &nbsp; </Grid>];
  const letters = [];
  sortedLetters.forEach((letter) => {
    letters.push(<Grid item xs={1} key={letter}>{letter}</Grid>);
    images.push(FoodImage(letter, sortedImages[letter]));
  });
  const currentQuantity = consumption[item.id] ? consumption[item.id] : 0;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-evenly">
            { images }
          </Grid>
          <Grid container justify="space-evenly">
            <Grid item xs={10}>
              <QuantitySlider
                item={item}
                keys={sortedLetters}
                onSelect={addItemQuantity}
                currentQuantity={currentQuantity}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

FoodPictures.propTypes = {
  item: Food.shape.isRequired,
  consumption: Consumption.shape.isRequired,
  addItemQuantity: PropTypes.func.isRequired,
};

export default FoodPictures;
