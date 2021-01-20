import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import Consumption from '../models/Consumption';
import DataTable from './Navigation/DataTable';
import Composition from '../models/Composition';
import { generateCsv, downloadCSV } from './common/csv';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const MyConsumption = ({
  consumption
}) => {
  const classes = useStyles();
  const data = Object.values(consumption.result);
  const columns = [
    { field: 'id' },
    { field: 'name' },
    { field: 'weight' },
  ];
  const compositionFields = Object.keys(Composition.empty());
  compositionFields.forEach(key => columns.push({ field: key }));
  let flatRows = [];
  const rows = data.map((d) => {
    const res = { 
      id: d.id, 
      name: d.name,
      weight: d.weight,
      ...d.composition
    }
    flatRows.push(Object.values(res));
    return res;
  });
  const csv = generateCsv(["id", "name", "weight", ...compositionFields], flatRows);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <DataTable columns={columns} rows={rows} height='640px' pageSize={10} />
      </div>
      <div style={{alignSelf: 'flex-end'}}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GetAppIcon />}
        onClick={() => downloadCSV(csv)}
      >
        Export csv
      </Button>
      </div>
    </div>
  )
};

MyConsumption.propTypes = {
  consumption: Consumption.shape.isRequired,
};

export default MyConsumption;
