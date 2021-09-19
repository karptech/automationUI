import axios from "axios";
import React, { useState } from "react";
import { Button } from "reactstrap";
import styles from "./uploadbox.module.css";
const Uploadbox = () => {
  const [File, setFile] = useState("");
  const [Filename, setFilename] = useState("");
  const formData = new FormData();

  const sendreq = async () => {
    console.log(File);
    formData.append("file", File);
    console.log(formData.getAll("file"));
    const res = await axios.post("http://localhost:4000/", formData);
    console.log(res.data);
  };

  const getreq = async () => {
    const res = await fetch("http://localhost:4000/");
    console.log(res.json());
  };

  if (typeof File === "object") {
    var filename = document.getElementById("filename");
    filename.textContent = `File name: ${File.name}`;
  }

  return (
    <div className={styles.uploadbox}>
      <div className={styles.drag_area}>
        <form method="post" action="/upload">
          <label className={styles.file}>

            <div className={styles.svg}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            </div>
          </label>
        </form>
      </div>
      <p id="filename">{Filename}</p>

      <Button variant="contained" className={styles.uploadbtn}>
        Choose file to upload
      </Button>
      <button onClick={sendreq}>send File to get json</button>
    </div>
  );
};

export default Uploadbox;
