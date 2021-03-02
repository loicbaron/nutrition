import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
  },
});

export default function CardSimple({ title, headerColor, children }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeaderSimple title={title} color={headerColor} />
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );
}

const useHeaderStyles = makeStyles(theme => ({
  root: props => ({
    backgroundColor: props.color,
  }),
}));

export function CardHeaderSimple({ title, color }) {
  const classes = useHeaderStyles({ color });
  return (
    <CardHeader title={title} classes={classes} />
  );
}
