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




function createData(
    id: number, 
    FirstName:string, 
    MiddleName: string,
    LastName:string,
    DateOfBirth: string,
    SubjectId: number
  ) {
    return { id, FirstName, MiddleName, LastName, DateOfBirth, SubjectId };
  }

const rows = [
  //createData(1, 'Anuja','Arun','Dhane',new Date("01-09-2000"),1),
  createData(2, 'Anuja','Arun','Dhane',("01-09-2000"),1),
  createData(3, 'Anuja','Arun','Dhane',("01-09-2000"),1),
  createData(4, 'Anuja','Arun','Dhane',("01-09-2000"),1),
  createData(5, 'Anuja','Arun','Dhane',("01-09-2000"),1),
];

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.FirstName}</TableCell>
              <TableCell align="center">{row.MiddleName}</TableCell>
              <TableCell align="center">{row.LastName}</TableCell>
              <TableCell align="center">{row.DateOfBirth}</TableCell>
              <TableCell align="center">{row.SubjectId}</TableCell>
              <TableCell  align="center"> 
                <IconButton aria-label="edit" size="large">
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