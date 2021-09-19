import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
    borderRadius: "20px !important",
    color: "#5E5873 !important",
  },
}))(TableRow);

function createData(name, provider, type, date, status) {
  return { name, provider, type, date, status };
}

const rows = [
  createData(
    "august API",
    "MERSEK",
    "API",
    "08/04/2021",
  ),
  createData(
    "quotation august",
    "MERSEK",
    "API",
    "08/04/2021",
  ),
  createData(
    "quotation august",
    "MERSEK",
    "API",
    "08/04/2021",
  ),
  createData(
    "quotation august",
    "MERSEK",
    "API",
    "08/04/2021",
  ),
];

const useStyles = makeStyles({
  root: {
    borderRadius: "15px !important",
    width:"94%",
    padding:"3%"
  },

  buttonorange: {
    backgroundColor: "#F96332",
    color: "white",
    fontWeight: "1000",
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
      <h1 className={classes.heading}>Registered Api</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.root}>
            <StyledTableCell>API NAME</StyledTableCell>
            <StyledTableCell align="center">PROVIDER</StyledTableCell>
            <StyledTableCell align="center">TYPE</StyledTableCell>
            <StyledTableCell align="center">DATE</StyledTableCell>
            <StyledTableCell align="center">EXECUTE</StyledTableCell>
            <StyledTableCell align="center">EDIT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.provider}</StyledTableCell>
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" className={classes.buttonorange}>
                  Run
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                {
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.474 4.00008L21.3889 7.91501C21.5538 8.07994 21.5538 8.34904 21.3889 8.51397L11.9097 17.9931L7.88194 18.4402C7.34375 18.5009 6.88802 18.0452 6.94878 17.507L7.39583 13.4792L16.875 4.00008C17.0399 3.83515 17.309 3.83515 17.474 4.00008ZM24.5052 3.00616L22.3872 0.888102C21.7274 0.22838 20.6554 0.22838 19.9913 0.888102L18.4549 2.42456C18.2899 2.58949 18.2899 2.85859 18.4549 3.02352L22.3698 6.93845C22.5347 7.10338 22.8038 7.10338 22.9688 6.93845L24.5052 5.40199C25.1649 4.73793 25.1649 3.66588 24.5052 3.00616ZM16.6667 15.415V19.8334H2.77778V5.94453H12.7517C12.8906 5.94453 13.0208 5.8881 13.1207 5.79262L14.8568 4.0565C15.1866 3.72664 14.9523 3.16675 14.4878 3.16675H2.08333C0.93316 3.16675 0 4.09991 0 5.25008V20.5279C0 21.678 0.93316 22.6112 2.08333 22.6112H17.3611C18.5113 22.6112 19.4444 21.678 19.4444 20.5279V13.6789C19.4444 13.2145 18.8845 12.9845 18.5547 13.31L16.8186 15.0461C16.7231 15.1459 16.6667 15.2761 16.6667 15.415Z"
                      fill="#555555"
                    />
                  </svg>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
