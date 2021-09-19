import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Automation2section.module.css";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table2 from "./subcomponents/Table2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  buttonorange: {
    backgroundColor: "#F96332",
    color: "white",
    fontWeight: "1000",
  },
  buttonwhite: {
    backgroundColor: "white",
    color: "#F96332",
    margin: "10px",
  },
  h1:{
    color:"#3F51B5"

  }
}));

export default function Automation2section() {
  const classes = useStyles();
  const Provider = [];
  const defaultProps = {
    options: Provider,
    getOptionLabel: (option) => option.title,
  };

  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };

  const [value, setValue] = React.useState(null);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={4}>
          <Grid>
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField {...params} label="Provider" />
              )}
            />{" "}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField id="input-with-icon-grid" className={styles.inputline} label="URL" />
        </Grid>
        <Grid item xs={12} sm={4} >
                  <TextField
              placeholder="Add a key"
              id="input-with-icon-grid"
              label="Key"
              className={styles.inputline}
            />
          {" "}
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={4} >
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField {...params} label="User ID" />
              )}
            />{" "}
        </Grid>
        <Grid item xs={12} sm={4}  >
          <TextField id="input-with-icon-grid" label="Password" className={styles.inputline}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="input-with-icon-grid"
            label="Name"
            placeholder="Enter name"
            InputProps={{}}
            className={styles.inputline}
          />{" "}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.autone}>
      <div className={styles.register}>
        <h1 className={styles.heading}>Register</h1>
        <div className={styles.root}>
          <Grid container spacing={6}>
            <Grid container item xs={12} spacing={4}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <FormRow2 />
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid>
                <Button variant="contained" className={classes.buttonwhite}>
                  Clear all
                </Button>
                <Button variant="contained" className={classes.buttonorange}>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <Table2 />
    </div>
  );
}
