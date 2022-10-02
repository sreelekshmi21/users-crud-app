import React,{useState, useEffect} from 'react';
import { List, Datagrid, TextField, EmailField, useRecordContext, TextInput, DateTimeInput, useGetList, useListController, ListContextProvider, ListToolbar, Loading, SearchInput, Button } from 'react-admin';
import Paper from "@mui/material/Paper";
import EditIcon from '@material-ui/icons/Edit';
import EditUserDialog from './EditUserDialog';
import { AddUserDetails } from './AddUserDetails';
import TextField2 from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Tabs, Tab, Box, Typography,  } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowCircleIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import LoadingComponent from './LoadingComponent';
import MButton from "@mui/material/Button";
import TableComponent from './TableComponent';
import {Stack} from "@mui/material";
import { Autocomplete } from '@mui/material';

const VerticalLine = () => <hr style={{ backgroundColor: "#707070" }} />;
const errorstyle = {
  color: "red",
  fontSize: "12px",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const UsersReport = props => {
  
  const skills = ['HTML','CSS','JS','REACT','SSS','XXX','CCC','ZZZ','MMM','NNN']
  
  
  const [reportValues, setReportValues] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)
  const [expanded, setExpanded] = useState(false);

  const handleFormChange = (e) =>{
    setReportValues({
      ...reportValues,
      [e.target.name]: e.target.value
    })
  }

  const {data, isLoading, ...listContext} = useListController({resource: 'users',
    filter: {dropDownKey: reportValues?.name}
  });


  console.log('#REPORT',data, reportValues?.name)

  function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

const optionsList = [
  'sssss', 'ddddd','ggggg'
]

useEffect(() => {
  if(Object.keys(errors).length === 0 && submit) console.log('#FORM SUBMIT') 
  else console.log('#FORM NOT SUBMIT') 
}, [errors])



  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('#handleSubmitTest',reportValues)
    //  const regex ='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    // const phoneregex = '/^[0-9]{10}$/';
    // const reg = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i';

    // if(validateEmail(reportValues.email)) errors.email = "This is valid email format!";
    // else errors.email = "This is invalid!";

    setErrors(validate(reportValues))

    setSubmit(true)
    // setExpanded(true)
  }

  function validate(values)
{
  console.log('#FORM',values)
  const errors = {};
  const phoneregex = '^\\d{10}$';
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) errors.name = "Name is required!";

    if (!values.phone) errors.phone = "Phone is required!";

    if (!values.email) errors.email = "Email is required!";
    
    if (!values.email.match(regexEmail)) errors.email = "INVALID EMAIL!";
    if (!values.phone.match(phoneregex)) errors.phone = "10 digits REQD!";
    console.log('#FORM',errors)
    return errors;
}

function draw() {
  const canvas = document.getElementById('canvas1');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

//     ctx.strokeStyle = 'green';
// ctx.lineWidth = 10;
// for (let y = 10; y < 100; y += 10) {
//   ctx.moveTo(10, y);
//   ctx.lineTo(90, y);
// }
// let cx = document.querySelector("canvas").getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 10);
ctx.lineTo(10, 70);
ctx.lineTo(90, 70);
ctx.fill();

// ctx.lineTo(50, 10);
ctx.stroke();

  }
}



function draw2() {
  const canvas = document.getElementById('canvas2');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'red';
ctx.lineWidth = 100;
// for (let y = 10; y < 100; y += 10) {
//   ctx.moveTo(10, y);
//   ctx.lineTo(90, y);
// }
// let cx = document.querySelector("canvas").getContext("2d");
ctx.beginPath();
ctx.moveTo(37.42109, 122.08718);
// ctx.moveTo(50, 10);
// ctx.lineTo(37.62054, 122.08911);
ctx.lineTo(37.4238, 122.08731);
// ctx.lineTo(50, 10);
ctx.stroke();

  }
}
useEffect(() => {
  draw()
  draw2()
}, [])

const handleSelectChange = () =>{
  
}

  const Tablebody = (
    <>
      <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
    </>
  );


 
  

     return (
    <>
    <div>
    
    <Box>
          
      <form>
        <Box sx={{ flexGrow: 1, marginTop: "2em" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h4">
                Personal Inormation
              </Typography>
              <Box sx={{ marginTop: "1em" }}>
                <FormLabel>Name</FormLabel>
                <Select
                              name="name"
                              // placeholder="Active"
                              displayEmpty
                              renderValue={
                                (reportValues.name !== "" || null) ? undefined : () => <span>Select</span>
                              }
                              value={reportValues.name}
                              onChange={handleSelectChange}
                            >
                              {/* <MenuItem key="0" value=''>
                                -- Select --
                              </MenuItem> */}
                              {optionsList?.map((obj,index) => (
                                <MenuItem key={index} value={obj}>
                                {obj}
                              </MenuItem>
                              ))}
                              
                              {/* <MenuItem key="2" value="inactive">
                                InActive
                              </MenuItem> */}
                            </Select>
               
              </Box>
              <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Email Address</FormLabel>
                    <TextField2
                      name="email"
                      placeholder="Enter Email Address"
                      type="text"
                      autoComplete="false"
                      value={reportValues.email}
                      onChange={handleFormChange}
                    />
                    {errors?.email && <div style={errorstyle}>{errors.email}</div>}
                  </Box>

                 





              <Box sx={{ marginTop: "1em" }}>
                <FormLabel>Phone</FormLabel>
                <TextField2
                  name="phone"
                  placeholder="10 Digit Mobile No"
                  type="number"
                  value={reportValues.phone}
                  onChange={handleFormChange}
                  // error={formErrors?.phone}
                  // helperText={formErrors?.phone && 'This is required'}
                />
                {errors?.phone && <div style={errorstyle}>{errors.phone}</div>}
              </Box>
              <div style={{ marginTop: "1em", marginBottom: "20px"}} className="modal-footer">
                <MButton variant="contained" 
                         color="primary"
                         onClick={handleSubmit}
                         disabled={Object.values(reportValues)?.includes('')}
                >
                  Create
                </MButton>
                
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
    {/* {expanded ?  <TableComponent /> : false} */}
    </div>
    <canvas id="canvas1" width="150" height="150"></canvas>
    <canvas id="canvas2" width="150" height="150"></canvas>
    <Stack spacing={2} width="250px">
       <Autocomplete 
       options={skills}
       renderInput={(params) => <TextField {...params}/>}
       />
    </Stack>  
</>
);}