import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
  },

  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    borderRadius:"20px !important",
    color:"#5E5873 !important"
  },
}))(TableRow);

function createData(name, provider, type, number, date, status) {
  return {name, provider, type, number, date, status};
}

const rows = [
  createData('quotation august', 'MERSEK',"EXCEL",13456781, "08/04/2021", "Uploaded successfully" ),
  createData('quotation august', 'MERSEK',"EXCEL",13456781, "08/04/2021", "Uploaded successfully" ),
  createData('quotation august', 'MERSEK',"EXCEL",13456781, "08/04/2021", "Uploaded successfully" ),
  createData('quotation august', 'MERSEK',"EXCEL",13456781, "08/04/2021", "Uploaded successfully" ),
];

const useStyles = makeStyles({
 root:{
  borderRadius: "15px !important",
  width:'94%',
    padding:"3%"
 },
  table: {
    minWidth: 700,
  },
  heading: {
    paddingTop: "3%",
    paddingLeft: "3%",
    color: "#3f51b5"
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <h1 className={classes.heading}>Extraction History</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow className={classes.root}>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="center">PROVIDER</StyledTableCell>
            <StyledTableCell align="center">TYPE</StyledTableCell>
            <StyledTableCell align="center">NUMBER</StyledTableCell>
            <StyledTableCell align="center">DATE</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.provider}</StyledTableCell>
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
