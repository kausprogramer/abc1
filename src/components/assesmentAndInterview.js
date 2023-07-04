import { useCollapse } from 'react-collapsed'
import './collapse.css';
import { useRadioGroup } from '@mui/material/RadioGroup';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormLabel } from '@mui/material';
// import { addDoc } from 'firebase/firestore';
// import { collection } from 'firebase/firestore';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import React, { useState, useEffect } from 'react';
import Navi1 from './navi1';
import InputControl from './inputContol';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import Card from "@material-ui/core/Card";
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where
} from 'firebase/firestore';
import { colors,
    useTheme, } from '@material-ui/core';

function AssesmentAndInterview(props){
    const theme=useTheme();
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [values, setValues] = useState({
        name: "",
        IN: "",
        date1:"",
        date2:"",
        name2:"",
        IN2:"",
        date3:"",
        name3:""
      });
      const CollectionRef = collection(db, "fixedTermContact")
    const addFile= (newVal)=>{
        return addDoc(CollectionRef, newVal);

    }
      const submitHandle= async()=>{
        const name = values.name;
        const IN = values.IN;
        const startDate = values.date1;
        const endDate = values.date2;
        const fillDate = values.date3;
        const newVal={
            name,
            IN,
            startDate,
            endDate,
            fillDate    
        };
        await addFile(newVal);

      }

  return (

<div style={{border:'2px', borderColor:'black',padding:'2px', overflow:'hidden'}}>
<div className="collapsible" >
        <div className="header"  {...getToggleProps()}>
            <p>
            Assessment & Interview Schedule
            </p>
            <p>
            {isExpanded ? '-' : '+'}
            </p>
        </div>
        <div style={{borderWidth:2}} {...getCollapseProps()}>
            <div className="content">
                <h5></h5>
                <Box>
                <Grid container spacing={2} padding={2}>
                    <Grid item xs={12} md={6}>
                    <TextField
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Contact number"
                  name="number"
                  autoComplete="number"
                />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                    <TextField
                  required
                  fullWidth
                  id="IDnumber"
                  label="ID Number"
                  name="IDnumber"
                  autoComplete="IDnumber"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="area"
                  label="Area Applied For"
                  name="area"
                  autoComplete="area"
                />
                    </Grid>

                    <Grid item xs={12} md={8}>
                    <TextField
                  required
                  fullWidth
                  id="interviewer"
                  label="Interviewer"
                  name="interviewer"
                  autoComplete="interviewer"
                />
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Date"
                  name="date"
                  autoComplete="date"
                />
                    </Grid>
                    
                        <Grid  item xs={12} md={2}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Pass Matric/grade 12</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Qualify" control={<Radio />} label="Qualify" />
                                <FormControlLabel value="DNQ" control={<Radio />} label="DNQ" />
                                
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} md={10}>
                        <TextField
                  fullWidth
                  id="notes1"
                  label="Notes"
                  name="Notes"
                  autoComplete="Notes"
                />
                    </Grid>
                    <Grid  item xs={12} md={2}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Pass Matric/grade 12</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Qualify" control={<Radio />} label="Qualify" />
                                <FormControlLabel value="DNQ" control={<Radio />} label="DNQ" />
                                
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} md={10}>
                        <TextField
                  fullWidth
                  id="notes1"
                  label="Notes"
                  name="Notes"
                  autoComplete="Notes"
                />
                    </Grid>
                    <Grid  item xs={12} md={2}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Pass Matric/grade 12</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Qualify" control={<Radio />} label="Qualify" />
                                <FormControlLabel value="DNQ" control={<Radio />} label="DNQ" />
                                
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} md={10}>
                        <TextField
                  fullWidth
                  id="notes1"
                  label="Notes"
                  name="Notes"
                  autoComplete="Notes"
                />
                    </Grid>
                    <Grid  item xs={12} md={2}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Pass Matric/grade 12</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Qualify" control={<Radio />} label="Qualify" />
                                <FormControlLabel value="DNQ" control={<Radio />} label="DNQ" />
                                
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} md={10}>
                        <TextField
                  fullWidth
                  id="notes1"
                  label="Notes"
                  name="Notes"
                  autoComplete="Notes"
                />
                    </Grid>
                    
                    </Grid>

                </Box>
            </div>
            </div>
            </div>
            </div>
  );
}

export default  AssesmentAndInterview;