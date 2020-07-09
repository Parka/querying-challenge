import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const Table_ = () => {
  const [loading, result] = useSelector(state=>[state.table.loading, state.table.result]);
  console.log('loading: ', loading)
  const dispatch = useDispatch();
  if(loading) return (
    <div style={{display: 'flex', justifyContent: 'center', padding: 60}}>
      <CircularProgress/>
    </div>
  );
  const rows = result['data to show'] || [];
  return (
  <Paper elevation={3}>
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              Comercio
            </TableCell>
            <TableCell>
              CUIT
            </TableCell>
            <TableCell>
              Concepto 1
            </TableCell>
            <TableCell>
              Concepto 2
            </TableCell>
            <TableCell>
              Concepto 3
            </TableCell>
            <TableCell>
              Concepto 4
            </TableCell>
            <TableCell>
              Concepto 5
            </TableCell>
            <TableCell>
              Concepto 6
            </TableCell>
            <TableCell>
              Balance actual
            </TableCell>
            <TableCell>
              Activo
            </TableCell>
            <TableCell>
              Ultima venta
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map( row => (
            <TableRow key={row['ID']}>
              <TableCell>
                {row['ID']}
              </TableCell>
              <TableCell>
                {row['Comercio']}
              </TableCell>
              <TableCell>
                {row['CUIT']}
              </TableCell>
              <TableCell>
                {row['Concepto 1']}
              </TableCell>
              <TableCell>
                {row['Concepto 2']}
              </TableCell>
              <TableCell>
                {row['Concepto 3']}
              </TableCell>
              <TableCell>
                {row['Concepto 4']}
              </TableCell>
              <TableCell>
                {row['Concepto 5']}
              </TableCell>
              <TableCell>
                {row['Concepto 6']}
              </TableCell>
              <TableCell>
                {row['Balance actual']}
              </TableCell>
              <TableCell>
                {row['Activo']?"✅":"❌"}
              </TableCell>
              <TableCell>
                {row['Ultima venta']}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[]}
      component="div"
      count={result["rows total"] || -1}
      rowsPerPage={result["rows per page"] || 10}
      page={0}
      onChangePage={console.log}
    />
  </Paper>
  )
}

export default Table_;