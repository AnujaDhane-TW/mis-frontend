import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import axios from "axios";




export default function Students() {
  const [students, setStudents] = useState<any>([]);
  //const [checkedStatus, setCheckedStatus]= useState<Array<Boolean>>([]);
  let myMap = new Map<number, boolean>();
  const [checked, setChecked] = React.useState();


  const navigate = useNavigate();
  function handleEdit(student:any) {
    navigate("/edit",{state:{student:student}});
  }
  function handleAdd() {
    navigate("/add");
  }
  function handleDelete(student: any): void {
    axios.delete(`http://localhost:5026/Student/${student.id}`).then(resp => {
      console.log(resp.data);
      });
  }
  const handleCheck = (id:number) => {
    myMap.set(id,!myMap.get(id));
  
    console.log(myMap);
  };
  const handleDeleteAll =()=>{
   
    myMap.forEach((value: boolean, key: number) => {
     if(value)
     {
      axios.delete(`http://localhost:5026/Student/${key}`).then(resp => {
      console.log(resp.data);
      });
     }
  });

  }
    
  function getStudents() {
    axios.get('http://localhost:5026/Student').then(resp => {
      setStudents(resp.data);
      });
      for (let index = 0; index < students.length; index++) {
       // checkedStatus.push(false);
       console.log(students[index].id);
         myMap.set(students[index].id,false);
       
      }
      console.log(myMap);
  }
  
  React.useEffect(() => {
      getStudents();
  }, [ ]);

  return (

    <div>
      <h1>Student Information</h1>
      <div  style={{float: "right",display:"flex"} }>
       <div>
            <form>
                <TextField
                id="search-bar"
                className="text"
              
                label="Enter student Id"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
       </div>
       <div>
        <Button onClick = {handleAdd} startIcon={<AddIcon />} >
                Add Student
        </Button>
            <IconButton aria-label="delete" size="large" onClick= {handleDeleteAll}>
                <DeleteIcon fontSize="inherit" />
        </IconButton>
       </div>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
                onChange={onSelectAllClick}
              />
          </TableCell> */}
            <TableCell>Id</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Middle Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="center">Favorite Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student:any) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Checkbox
                checked={checked}
                onChange={()=>handleCheck(student.id)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="center">{student.firstName}</TableCell>
              <TableCell align="center">{student.middleName}</TableCell>
              <TableCell align="center">{student.lastName}</TableCell>
              <TableCell align="center">{student.dateOfBirth}</TableCell>
              <TableCell align="center">{student.favoriteSubject.name}</TableCell>
              <TableCell  align="center"> 
                <IconButton aria-label="edit" size="large" onClick={()=>handleEdit(student)}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
                </TableCell>
              <TableCell > 
                <IconButton aria-label="delete" size="large" onClick={()=>handleDelete(student)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}