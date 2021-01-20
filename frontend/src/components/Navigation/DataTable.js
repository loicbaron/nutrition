import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const DataTable = ({columns, rows, height = '400px', pageSize = 5}) => {
return (
    <div style={{ height, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} />
    </div>
  );
};

export default DataTable;