import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Selectbtn.module.css'

const useStyles = makeStyles((theme) => ({

  notchedOutline: { 
    border: "2px solid #999999 !important",
    borderRadius: "8px !important",
  
  },


}));



function Selectbutton({labeltext, placeholdertext,options }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(placeholdertext);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

  const values=options.map(a=>({label:a,value:a}))
  console.log(values)
    return (
        <div>
     <TextField
          select
          label={labeltext}
          color="#F96332"
          InputLabelProps={{
            style: { 
              color: '#3F51B5' ,
              fontSize:"16px",
            
          },
          }}
          value={value}
          onChange={handleChange}
          variant="outlined"
          className={classes.root,styles.root}
          InputProps={ {
            classes: {
                notchedOutline: classes.notchedOutline,
            }}}
        >
          {values.map((option) => (
            <MenuItem key={option.value} value={option.value} color="#999999">
              {option.label}
            </MenuItem>
          ))}
        </TextField>        
        </div>
    )
}

export default Selectbutton
