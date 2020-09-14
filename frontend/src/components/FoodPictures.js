import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Food from '../models/Food';
import QuantitySlider from './QuantitySlider';
import SimpleModal from './Navigation/SimpleModal';
import config from '../configs/config';

const FoodImage = (k, v) => {
  return (
      <Grid item xs={1} key={v}>
        <SimpleModal title={k}>
          <img src={`${config.photos}/adult/${v}`} alt={v} width="100%" />
        </SimpleModal>
      </Grid>
  );
};

const FoodPictures = ({ item, addItemQuantity, consumption }) => {
  const img = JSON.parse(item.images).adult;
  const sortedImages =  Object.keys(img).sort().reduce((r, k) => (r[k] = img[k], r), {});
  let images = [<Grid item xs={1} key={'0'}> &nbsp; </Grid>];
  let keys = ['0'];
  let letters = [<Grid item xs={1} key='0'>{'0'}</Grid>];
  for (var [k, v] of Object.entries(sortedImages)) {
    keys.push(k);
    letters.push(<Grid item xs={1} key={k}>{k}</Grid>)
    if (v !== null) {
      images.push(FoodImage(k, v));
    } else {
      images.push(<Grid item xs={1} key={k}> &nbsp; </Grid>);
    }
  }
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
              <QuantitySlider item={item} keys={keys} onSelect={addItemQuantity} currentQuantity={currentQuantity} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

FoodPictures.propTypes = {
  item: Food.shape.isRequired,
  consumption: PropTypes.object.isRequired,
  addItemQuantity: PropTypes.func.isRequired,
};

export default FoodPictures;
