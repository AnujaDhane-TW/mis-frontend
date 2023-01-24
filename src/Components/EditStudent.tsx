import React, { useState } from 'react'
import {Formik, Form,
  } from 'formik'
import { TextField, Button, Card, CardContent, Typography} from '@mui/material';
import { useLocation } from 'react-router-dom'
import classes from "./styles/StudentsStyle.module.css";
import SubjectDropDown from './SubjectDropDown';

function EditStudent(prop:any) {
    const location = useLocation();
    const student = location.state.student;
    const currentStudent: any = {
      firstName: student.firstName,
      middleName: student.middleName,
      lastName: student.lastName,
      dateOfBirth: student.dateOfBirth,
      favoriteSubject: student.favoriteSubject.name,
    }
    const [firstName, setFirstName] = useState(currentStudent.firstName);
    const [middleName, setMiddleName] = useState(currentStudent.middleName);
    const [lastName, setLastName] = useState(currentStudent.lastName);
    const [dateOfBirth, setDateOfBirth] = useState(currentStudent.dateOfBirth);
    const [favoriteSubject, setFavoriteSubject] = useState(currentStudent.favoriteSubject);
    function handleFirstName (e: React.ChangeEvent<HTMLInputElement>){  
        setFirstName(e.target.value);
    }
    function handleLastName (e: React.ChangeEvent<HTMLInputElement>){  
      setLastName(e.target.value);
    }
    function handleMiddleName (e: React.ChangeEvent<HTMLInputElement>){  
      setMiddleName(e.target.value);
    }
    function handleDOB (e: React.ChangeEvent<HTMLInputElement>){  
      setDateOfBirth(e.target.value);
    }
    return (  
      <Card sx={{ minWidth: 500, minHeight: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Edit Student Details
          </Typography>
        <Formik
        initialValues={currentStudent}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        <Form className={classes.form}>
            <div className={classes.input}>
            <TextField
                id='firstName'
                label="First Name"
                name='firstName'
                placeholder={currentStudent.firstName}
                value={firstName}
                onChange={handleFirstName}
            />
            </div>
            <div className={classes.input}>
            <TextField
                id='middleName'
                label="Middle Name"
                name='middleName'
                placeholder='Middle Name'
                value={middleName}
                onChange={handleMiddleName}
            />
            </div>
            <div className={classes.input}>
            <TextField
                id='lastName'
                label="Last Name"
                name='lastName'
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastName}
            />
            </div>
             <div className={classes.input}>
            <TextField
                id='date'
                label="Date of Birth"
                name='dateOfBirth'
                placeholder='Date of Birth'
                value={dateOfBirth.slice(0,10)}
                onChange={handleDOB}
            />
            </div>
            <div className={classes.input}>
            <SubjectDropDown favSubject={favoriteSubject}/>
            </div>
            <Button variant='contained' type='submit'>
            Save Changes
          </Button>  
        </Form>
    </Formik>
    </CardContent>
    </Card>
    );
}

export default EditStudent;