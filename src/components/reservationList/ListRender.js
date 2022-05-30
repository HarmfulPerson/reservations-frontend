import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { parseDate } from '../../consts/utils';
import languages from '../../consts/language';

const useStyles = makeStyles((theme) => ({
  rowConfirmed: {
    color: 'rgba(0,255,0) !important',
  },
  rowFree: {
    color: 'rgba(0,0,255) !important',
  },
  rowToConfirm: {
    color: 'rgba(255, 255, 0) !important',
  },
  buttonDelete: {
    color: 'white !important',
    backgroundColor: 'red !important',
  },
  row: {
    '&:hover': {
      backgroundColor: 'rgb(193 190 190)',
    },
  },
}));

const ListRender = (props) => {
  const { reservations, deleteReservation } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">
              {languages.pl.reservationsList.startDate_}
            </TableCell>
            <TableCell align="right">
              {languages.pl.reservationsList.endDate_}
            </TableCell>
            <TableCell align="right">
              {languages.pl.reservationsList.status_}
            </TableCell>
            <TableCell align="right">
              {languages.pl.reservationsList.reservedBy_}
            </TableCell>
            <TableCell align="center">
              {languages.pl.reservationsList.delete_}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                className={classes.row}
                key={row.uid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{parseDate(row.startDate)}</TableCell>
                <TableCell align="right">{parseDate(row.endDate)}</TableCell>
                <TableCell
                  className={clsx({
                    [classes.rowConfirmed]: row.status === 'confirmed',
                    [classes.rowFree]: row.status === 'free',
                    [classes.rowToConfirm]: row.status === 'toConfirm',
                  })}
                  align="right"
                >
                  {languages.pl.reservationsList[`${row.status}_`]}
                </TableCell>
                <TableCell align="right">
                  {row.reservedBy ? row.reservedBy : '-'}
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => deleteReservation(row.uid)}
                    variant="contained"
                    className={classes.buttonDelete}
                  >
                    {languages.pl.reservationsList.delete_}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={reservations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

ListRender.propTypes = {
  reservations: PropTypes.array.isRequired,
  deleteReservation: PropTypes.func.isRequired,
};

export default ListRender;
