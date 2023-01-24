import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";


export default function Students() {
  const navigate = useNavigate();
  function handleEdit() {
    navigate("/edit");
  }
   const [students, setStudents] = useState<any>([]);
  //var students: any[]=[];
  function getStudents() {
    axios.get('http://localhost:5026/Student').then(resp => {
      setStudents(resp.data);
      });
      console.log(students);
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
                /*onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}*/
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
        <Button startIcon={<AddIcon />} >
                Add Student
            </Button>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
        </IconButton>
       </div>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Middle Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="center">Favourite Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.middleName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.dateOfBirth}</TableCell>
              <TableCell align="center">{row.favoriteSubject.name}</TableCell>
              <TableCell  align="center"> 
                <IconButton aria-label="edit" size="large" onClick={handleEdit}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
                </TableCell>
              <TableCell > 
                <IconButton aria-label="delete" size="large">
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