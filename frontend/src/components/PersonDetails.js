import React from 'react';
import PropTypes from 'prop-types';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';
import { Grid, Radio, FormControl, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './PersonDetails.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const PersonDetails = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(undefined);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid className="flex-center-container flex-center-cell" container spacing={3}>
        <FormControl component="fieldset" className="full-width">
          <RadioGroup aria-label="position" name="position" value={selectedValue} onChange={handleChange} row>
            <Grid className="flex-center-cell" item xs={6}>
              <FormControlLabel
                value="child"
                control={<Radio color="primary" />}
                label="Enfant"
                labelPlacement="end"
              />
              <div className="flex-center-content"><ChildCareIcon /></div>
            </Grid>
            <Grid className="flex-center-cell" item xs={6}>
              <FormControlLabel
                value="adult"
                control={<Radio color="primary" />}
                label="Adulte"
                labelPlacement="end"
              />
              <div className="flex-center-content"><FaceIcon /></div>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
};

export default PersonDetails;
