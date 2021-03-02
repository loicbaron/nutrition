import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
import Consumption from '../models/Consumption';
import CardSimple from './Navigation/CardSimple';
import ProgressBar from './Navigation/ProgressBar';

function round(value) {
  return Math.round(value * 100) / 100;
}
function sumReducer(sum, val) {
  return round(sum + val);
}
const getTotal = (items, column) => items.map(li => li.composition[column]).reduce(sumReducer, 0);

const getColor = (percentage) => {
  if (percentage < 50) return 'red';
  if (percentage < 80) return 'orange';
  if (percentage < 110) return 'green';
  if (percentage < 130) return 'orange';
  return 'red';
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MyConsumption = ({
  consumption,
  intl
}) => {
  const classes = useStyles();
  const results = Object.values(consumption.result);

  const kcal = getTotal(results, 'Energie_kcal');
  const dailyKcal = 2000;
  const percentKcal = round(kcal * 100 / dailyKcal);

  const glucides = getTotal(results, 'Glucides_g');
  const dailyGlucides = 260;
  const percentGlucides = round(glucides * 100 / dailyGlucides);

  const lipides = getTotal(results, 'Lipides_g');
  const dailyLipides = 70;
  const percentLipides = round(lipides * 100 / dailyLipides);

  const proteines = getTotal(results, 'Protéines_g');
  const dailyProteines = 50;
  const percentProteines = round(proteines * 100 / dailyProteines);

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        Bilan de ma consommation
      </Typography>
      <div className={classes.content}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardSimple title="Energie" headerColor={getColor(percentKcal)}>
              <div>{kcal} Kcal / {dailyKcal} (par jour)</div>
              <ProgressBar value={percentKcal} />
              {percentKcal} %
            </CardSimple>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardSimple title="Glucides" headerColor={getColor(percentGlucides)}>
              <div>{glucides} g / {dailyGlucides} (par jour)</div>
              <ProgressBar value={percentGlucides} />
              {percentGlucides} %
            </CardSimple>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardSimple title="Lipides" headerColor={getColor(percentLipides)}>
              <div>{lipides} g / {dailyLipides} (par jour)</div>
              <ProgressBar value={percentLipides} />
              {percentLipides} %
            </CardSimple>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardSimple title="Protéines" headerColor={getColor(percentProteines)}>
              <div>{proteines} g / {dailyProteines} (par jour)</div>
              <ProgressBar value={percentProteines} />
              {percentProteines} %
            </CardSimple>
          </Grid>
        </Grid>
      </div>
      <Typography variant="body2" component="p">
        <b><FormattedMessage id="daily.intake" />&nbsp;</b>
        <a
          href={intl.formatMessage({ id: 'daily.intake.link' })}
          target="_blank"
          rel="noopener noreferrer"
        >
          (ref)
        </a>
      </Typography>
    </div>

  );
};

MyConsumption.propTypes = {
  consumption: Consumption.shape.isRequired,
};

export default injectIntl(MyConsumption);
