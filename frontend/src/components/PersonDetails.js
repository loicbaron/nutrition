import React from 'react';
import PropTypes from 'prop-types';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';
import {
  Grid, Radio, FormControl, RadioGroup, FormControlLabel,
} from '@material-ui/core';
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
const PersonDetails = ({ handlePersonDetails, age, selectAge }) => {
  const classes = useStyles();
  // const [selectedValue, setSelectedValue] = React.useState('');
  const ChildLabel = () => (
    <div className="flex-center-content">
      Enfant&nbsp;<ChildCareIcon />
    </div>
  );
  const AdultLabel = () => (
    <div className="flex-center-content">
      Adulte&nbsp;<FaceIcon />
    </div>
  );
  const handleChange = (event) => {
    // setSelectedValue(event.target.value);
    selectAge(event.target.value);
    handlePersonDetails(event.target.value.length > 0);
  };
  return (
    <div className={classes.root}>
      <Grid className="flex-center-container flex-center-cell" container spacing={3}>
        <FormControl component="fieldset" className="full-width">
          <RadioGroup aria-label="position" name="position" value={age} onChange={handleChange} row>
            <Grid className="flex-center-cell" item xs={6}>
              <FormControlLabel
                value="child"
                control={<Radio color="primary" />}
                label={<ChildLabel />}
                labelPlacement="end"
              />
            </Grid>
            <Grid className="flex-center-cell" item xs={6}>
              <FormControlLabel
                value="adult"
                control={<Radio color="primary" />}
                label={<AdultLabel />}
                labelPlacement="end"
              />
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
};

PersonDetails.propTypes = {
  handlePersonDetails: PropTypes.func.isRequired,
  age: PropTypes.string,
  selectAge: PropTypes.func.isRequired,
};

PersonDetails.defaultProps = {
  age: '',
};

export default PersonDetails;
