import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';


const DataTable = ({
  columns, rows, height = '400px', pageSize = 5,
}) => (
  <div style={{ height, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={pageSize} />
  </div>
);

DataTable.propTypes = {
  columns: PropTypes.arrayOf(Object).isRequired,
  rows: PropTypes.arrayOf(Object).isRequired,
  height: PropTypes.string,
  pageSize: PropTypes.number,
};
DataTable.defaultProps = {
  height: '400px',
  pageSize: 5,
};

export default DataTable;
