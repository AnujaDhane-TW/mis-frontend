import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SubjectDropDown(prop:any) {
  const [subject, setSubject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };
  function createData(
    SubjectId: number, 
    Name:string, 
  ) {
    return {  SubjectId, Name };
  }
  const subjects = [
    //createData(1, 'Anuja','Arun','Dhane',new Date("01-09-2000"),1),
    createData(1,'Chemistry'),
    createData(3, 'Maths'),
    createData(4, 'Physics'),
  ];
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"  
          label="Subjects"
          name={prop.name}
          value={subject}
          onChange={prop.onChange}
        > 
        {subjects.map((subject:any) => (
          <MenuItem value={subject} key={subject.SubjectId}>{subject.Name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}