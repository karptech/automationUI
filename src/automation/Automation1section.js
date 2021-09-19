import React from "react";
import Selectbutton from "./subcomponents/Selectbutton";
import Button from "@material-ui/core/Button";
import styles from "./Automation1section.module.css";
import Uploadbox from "./subcomponents/Uploadbox";
import Table from "./subcomponents/Table";
import { makeStyles, TextField } from "@material-ui/core";
import style from "./subcomponents/Selectbtn.module.css";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    border: "2px solid #999999 !important",
    borderRadius: "8px !important",
  },
}));

const Automation1section = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.auto1main}>
        <div className={styles.onemain}>
          <Uploadbox />

          <div className={styles.selectbtn}>
            <p className={styles.heading}>Upload Documents to Extract info</p>
            <div className={styles.selectdiv}>
              <Selectbutton
                labeltext={"Document type"}
                placeholdertext={"Excel,PDF,DOC,Image"}
                options={["Excel", "Pdf", "Doc", "Image"]}
              />
              <TextField
                className={style.root}
                label="Document Number"
                id="outlined-size-normal"
                defaultValue="Document Number"
                variant="outlined"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#3F51B5",
                    fontSize: "16px",
                  },
                }}
              />{" "}
              <Selectbutton
                labeltext={"Document Name"}
                placeholdertext={"Document Name"}
                options={["Excel", "Pdf", "Doc", "Image"]}
              />
              <Selectbutton
                labeltext={"Provider"}
                placeholdertext={"Add shipping company name"}
                options={["Excel", "Pdf", "Doc", "Image"]}
              />
            </div>

            <Button
              variant="contained"
              size="medium"
              className={styles.extractbtn}
            >
              Extract Details
            </Button>
          </div>
        </div>
        <div className={styles.twomain}>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Automation1section;
