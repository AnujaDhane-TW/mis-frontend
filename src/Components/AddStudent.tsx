import React, { useState } from 'react'
import {Formik, Form,
  } from 'formik'
import { TextField, Button, Card, CardContent, Typography} from '@mui/material';
import classes from "./styles/StudentsStyle.module.css";
import SubjectDropDown from './SubjectDropDown';
import axios from "axios";
function AddStudent() {
    
  function setStudent(values: { firstName: string; middleName: string; lastName: string; dateOfBirth: string; favoriteSubject: any; }) {
    const payload = {
    firstName: values.firstName,
    lastName: values.lastName,
    middleName: values.middleName,
    dateOfBirth: values.dateOfBirth,
    subjectId: values.favoriteSubject.SubjectId
    }
    
    axios.post('http://localhost:5026/Student',payload).then(resp => {
      console.log(resp.data);
      });

  }

    return (  
      <Card sx={{ minWidth: 500, minHeight: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Add Student Details
          </Typography>
        <Formik
        initialValues={
          { firstName: '',
            middleName:'',
            lastName: '',
            dateOfBirth: '',
            favoriteSubject: '', }
        }
        onSubmit={(values, actions) => {
          setStudent(values)
          console.log({ values, actions })
          
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        {props => (
        <Form className={classes.form}>
            <div className={classes.input}>
            <TextField
                id='firstName'
                label="First Name"
                name='firstName'
                placeholder='firstName'
                value={props.values.firstName}
                onChange={props.handleChange}
            />
            </div>
            <div className={classes.input}>
            <TextField
                id='middleName'
                label="Middle Name"
                name='middleName'
                placeholder='Middle Name'
                value={props.values.middleName}
                onChange={props.handleChange}
            />
            </div>
            <div className={classes.input}>
            <TextField
                id='lastName'
                label="Last Name"
                name='lastName'
                placeholder='Last Name'
                value={props.values.lastName}
                onChange={props.handleChange}
            />
            </div>
             <div className={classes.input}>
            <TextField
                id='date'
                label="Date of Birth"
                name='dateOfBirth'
                placeholder='Date of Birth'
                value={props.values.dateOfBirth.slice(0,10)}
                onChange={props.handleChange}
            />
            </div>
            <div className={classes.input}>
            <SubjectDropDown id= 'favoriteSubject' name= 'favoriteSubject' value={props.values.favoriteSubject}  onChange={props.handleChange}/>
            </div>
            <Button variant='contained' type='submit'>
            Save Changes
          </Button>  
        </Form>
        )}
    </Formik>
    </CardContent>
    </Card>
    );
}

export default AddStudent;