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

export const UsersList = props => {
  const [open, setOpen] = useState(false);
  const [openAdd,setOpenAdd] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: null,
    username: null,
    phone: null,
    website: null,
    company: null

  });
 
  const listContext = useListController({resource: 'users'});

// if (isLoading) { return <>Loading</>; }
// if (error) { return <p>ERROR</p>; }

console.log('#DATAUSERS',listContext)

const [years, setYears] = useState([])    

  
const DateSetterField = () =>{
    
    const dt = new Date()
  return (
    <>
      <span>{dt.toString()}</span>
    </>
  )
}

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>
    ) : null;
}
 
const EditField = ({ source }) => {
    const record = useRecordContext();
    console.log('#Edit',record)
    return (
        // <EditIcon onClick={() => handleEdit(record[source])}/>
        <EditIcon onClick={() => handleEdit(record)}/>
    )
}

const postFilters = [
  <SearchInput source="q" alwaysOn />
];


  const handleEdit = (row) =>{
    console.log('#EditRow',row)
    setCurrentUser({
      id: row?.id,
      name: row?.name,
      username: row?.username,
      phone: row?.phone,
      website: row?.website,
      company: row?.company?.name,   
     })
    setOpen(true)
  }

  const [chartData, setChartData] = useState({
    data: [],
    year: null,
    panic_summary: null
  })

  const datas = {
    bar_chart: [{
      year: 2022,
      panic_summary: {
        num_sos_pending: 10,
        num_sos_resolved: 20,
        total_sos: 30
      },
      data: [{
        tcmonth: 1,
        num_panic: 2
      },{
        tcmonth: 2,
        num_panic: 7
      },{
        tcmonth: 3,
        num_panic: 0
      },{
        tcmonth: 4,
        num_panic: 10
      },{
        tcmonth: 5,
        num_panic: 12
      },
    ]
     },
     {
      year: 2021,
      panic_summary: {
        num_sos_pending: 40,
        num_sos_resolved: 50,
        total_sos: 60
      },
      data: [{
        tcmonth: 1,
        num_panic: 0
      },{
        tcmonth: 2,
        num_panic: 16
      },{
        tcmonth: 3,
        num_panic: 0
      },{
        tcmonth: 4,
        num_panic: 4
      },{
        tcmonth: 5,
        num_panic: 1
      },
    ]
     }
    ] 
  
  }

  useEffect(() => {
    if(!datas) return
    formatData(datas)
  }, [])
  

  const formatData = (datas) =>{
    getYears(datas)
    
  let sel = datas?.bar_chart?.find((obj,ind) => obj?.year == new Date().getFullYear())

   const formattedData = formatMonth(sel)
    
    setChartData(formattedData)
  }


  const getYears = (datas) =>{
    let yr = []
    datas?.bar_chart?.map((obj,ind) =>{
      if(obj?.year){
        if(!yr[ind]) yr.push(obj?.year)
      }
    })
    setYears(yr)
  }

  const formatMonth = (sel) =>{

    sel?.data?.map((obj, index) => {
      if (obj?.tcmonth == 1) {
        obj["tcmonth"] = "Jan";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 2) {
        obj["tcmonth"] = "Feb";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 3) {
        obj["tcmonth"] = "Mar";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 4) {
        obj["tcmonth"] = "Apr";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 5) {
        obj["tcmonth"] = "May";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 6) {
        obj["tcmonth"] = "Jun";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 7) {
        obj["tcmonth"] = "Jul";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 8) {
        obj["tcmonth"] = "Aug";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 9) {
        obj["tcmonth"] = "Sept";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 10) {
        obj["tcmonth"] = "Oct";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 11) {
        obj["tcmonth"] = "Nov";
        obj["num_panic"] = obj?.num_panic;
      }
      if (obj?.tcmonth == 12) {
        obj["tcmonth"] = "Dec";
        obj["num_panic"] = obj?.num_panic;
      }
      return obj;
    });

    return sel
  }

  const handleChange = (e) =>{
    e.preventDefault()
    const {name, value} = e.target
    let dt = datas?.bar_chart?.find((obj,index) => obj?.year == value)
    const formattedData = formatMonth(dt)
    setChartData(formattedData)
  }

  const [formValues, setFormValues] = useState({
    name: null,
    phone: null
  })

  const [formErrors, setFormErrors] = useState({
    name: true,
    phone: true
  })

  // const [isSubmit, setIsSubmit] = useState(false)


  useEffect(() => {
    const ferror = { ...formErrors };
    
    Object.keys(formValues).some((key) => {
      ferror[key] = false
      if ((formValues[key] == "" || formValues[key] == null)) ferror[key] = true
      
    });
    setFormErrors(ferror)
  }, [formValues])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    // setIsSubmit(true)
    // setFormErrors(validate(formValues))
    
  }

  const handleSubmitTest = (e) =>{
    e.preventDefault()
    console.log('#handleSubmitTest')
    // const listContext = useListController({resource: 'posts'});
    // console.log('#handleSubmitTest',listContext)
    // setIsSubmit(true)
    // setFormErrors(validate(formValues))
    
  }

  const handleFormChange = (e) =>{
    setFormValues(
      {
        ...formValues,
        [e.target.name]: e.target.value

      }
    )
  }

  
    
  // const validate = (values) => {
  //   const errors = {};
  //   // const regex ='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
  //   //const phoneregex = '/^[0-9]{10}$/';
  //   if (!values.name) errors.name = "Name is required!";

  //   if (!values.phone) errors.phone = "Phone is required!";
  //   return errors;
  // };
  
    return (
    <>
   {listContext?.isLoading && <div>{<LoadingComponent load={listContext?.isLoading}/>}</div>}
<ListContextProvider value={{...listContext}} filters={postFilters}>
<ListToolbar filters={postFilters} actions={<AddUserDetails openAdd={openAdd}setOpenAdd={() => setOpenAdd(true)} totalRecords={listContext}/>} />
<Datagrid>
<TextField source="id" />
<TextField source="name" />
<TextField source="username" />
<EmailField source="email" />
<TextField source="address.street" />
<TextField source="phone" sortable={false}/>
<TextField source="website" />
<TextField source="company.name" label="Company Name"/>
<DateSetterField  label="Date"/>
<MyUrlField source="website" />
<EditField source="id" label="Actions"/>
<Button onClick={handleSubmitTest}>SUBMIT</Button>
</Datagrid>
</ListContextProvider>
  <EditUserDialog open={open} setOpen={setOpen} currentUser={currentUser}/> 
  <Paper style={{ width: "70%", marginTop: "15px" }}>
      <Typography
        color="textSecondary"
        variant="h"
        component="h4"
        className="Card-Title"
        sx={{
          marginBottom: "15px",
          marginRight: "15px",
        }}
      >
        Total SOS <MoreIcon style={{ float: "right" }} />
      </Typography>
      <div>
        <FormLabel>Year</FormLabel>
        <Select
          sx={{width:'205px',background:"#f0f0ff"}}
          name="year"
          placeholder="Year"
          value={chartData?.year}
          onChange={(e) => handleChange(e)}
        >
          {years?.length != 0 ?
            years?.map((year, index) => (
              <MenuItem key={index} value={year}>
                {year}
              </MenuItem>
            )) : <MenuItem>Select</MenuItem>
		
		}
        </Select>
      </div>
     {chartData?.data?.length > 0 ? (
      <div style={{ display: "flex" }}>
        <BarChart width={500}
          height={300} data={chartData?.data}>
        <Tooltip  />
        <Legend />
          <XAxis dataKey="tcmonth" />
          <YAxis dataKey="num_panic" />
          <Bar dataKey="num_panic" barSize={30} radius={[25,25,0,0]}/>
        </BarChart>
        <VerticalLine />
        <Box textAlign="right" className="chart-right">
          <Typography color="textSecondary" component="h2">
            {/* {panic_summary && panic_summary?.total_sos} */}
          </Typography>
          <Typography color="textSecondary" component="p">
            Total
          </Typography>
          <Typography color="textSecondary" component="h2">
            {chartData && chartData?.panic_summary?.total_sos}
          </Typography>
          <Typography
            color="#63CE78 !important"
            component="p"
            className="arrow-right"
          >
            Resolved <ArrowCircleIcon />
          </Typography>
          <Typography color="textSecondary" component="h2">
            {chartData && chartData?.panic_summary?.num_sos_resolved}
          </Typography>
          <Typography
            color="#63CE78 !important"
            component="p"
            className="arrow-right"
          >
            Pending <ArrowCircleIcon />
          </Typography>  
          <Typography color="textSecondary" component="h2">
          {chartData && chartData?.panic_summary?.num_sos_pending}
          </Typography>
          <Typography
            color="#FA9826 !important"
            component="p"
            className="arrow-right"
          >
            Year <ArrowCircleIcon />
          </Typography>
          <Typography
            color="#FA9826 !important"
            component="p"
            className="arrow-right"
          >
           {chartData?.year}
          </Typography>
        </Box>
      </div>) : <Typography>No Data</Typography>}
    </Paper>
    <Modal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="AdduserModal"
      >
        <Box sx={style} className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User
          </Typography>
          {/* <span className="close-btn" onClick={handleClose}>
            <CloseIcon />
          </span> */}
          {/* {
                (Object.keys(formErrors).length === 0 && isSubmit)?(<div style={successstyle}>User Created Successfully</div>):
                (<pre></pre>)
                //(<pre>{JSON.stringify(formValues,undefined,2)}</pre>)
            } */}

          <form>
            <Box sx={{ flexGrow: 1, marginTop: "2em" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="h6" component="h4">
                    Personal Inormation
                  </Typography>
                  <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Name</FormLabel>
                    <Select
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      value={formValues.name}
                      onChange={handleFormChange}
                      error={formErrors?.name}
                      helperText={formErrors?.name && 'This is required'}
                    />
                   
                  </Box>
                  <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Phone</FormLabel>
                    <TextField2
                      name="phone"
                      placeholder="10 Digit Mobile No"
                      type="text"
                      value={formValues.phone}
                      onChange={handleFormChange}
                      error={formErrors?.phone}
                      helperText={formErrors?.phone && 'This is required'}
                    />
                   
                  </Box>
                  {/* <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Email Address</FormLabel>
                    <TextField2
                      name="email"
                      placeholder="Enter Email Address"
                      type="text"
                      autoComplete="false"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <div style={errorstyle}>{formErrors.email}</div>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" component="h4">
                    Settings
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={{ marginTop: "1em" }}>
                          <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select
                              name="roleid"
                              placeholder="Role"
                              value={formValues.roleid}
                              onChange={handleInputChange}
                            >
                              {userroles.map((role) => (
                                <MenuItem key={role.rolename} value={role?.id}>
                                  {role.rolename}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <div style={errorstyle}>{formErrors.rolename}</div>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ marginTop: "1em" }}>
                          <FormControl>
                            <FormLabel>Manager</FormLabel>
                            <Select
                              name="userLimit"
                              placeholder="Manager"
                              value={formValues.userLimit}
                              onChange={handleInputChange}
                            >
                              <MenuItem key="" value="">
                                -- Select --
                              </MenuItem>
                              <MenuItem key="1" value="1">
                                Yes
                              </MenuItem>
                              <MenuItem key="0" value="0">
                                No
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ marginTop: "1em" }}>
                          <FormControl>
                            <FormLabel>Device Access</FormLabel>
                            <Select
                              name="deviceLimit"
                              placeholder="Device"
                              value={formValues.deviceLimit}
                              onChange={handleInputChange}
                            >
                              <MenuItem key="" value="">
                                -- Select --
                              </MenuItem>
                              <MenuItem key="1" value="1">
                                Yes
                              </MenuItem>
                              <MenuItem key="0" value="0">
                                No
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ marginTop: "1em" }}>
                          <FormControl>
                            <FormLabel>Active</FormLabel>
                            <Select
                              name="disabled"
                              placeholder="Active"
                              value={formValues.disabled}
                              onChange={handleInputChange}
                            >
                              <MenuItem key="" value="">
                                -- Select --
                              </MenuItem>
                              <MenuItem key="false" value="false">
                                Active
                              </MenuItem>
                              <MenuItem key="true" value="true">
                                InActive
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ marginTop: "1em" }}>
                    <Typography variant="h6" component="h4">
                      Set Password
                    </Typography>
                    <Box sx={{ marginTop: "1em" }}>
                      <FormLabel>Enter Password</FormLabel>
                      <TextField2
                        name="password"
                        placeholder="Enter Password"
                        type={formValues?.showPassword ? "text" : "password"}
                        autoComplete="false"
                        value={formValues.password}
                        onChange={handleInputChange}
                      />
                      {formValues?.showPassword ? (
                        <EyeIcon
                          onClick={togglePassword}
                          sx={{
                            position: "absolute",
                            bottom: "80px",
                            right: "40px",
                          }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={togglePassword}
                          sx={{
                            position: "absolute",
                            bottom: "80px",
                            right: "40px",
                          }}
                        />
                      )}
                    </Box> */}
                  {/* </Box> */}
                  <div style={{ marginTop: "1em", marginBottom: "20px"}} className="modal-footer">
                    <MButton variant="contained" 
                             color="primary"
                             onClick={handleSubmit}
                             disabled={Object.values(formErrors)?.includes(true)}
                    >
                      Create
                    </MButton>
                    <MButton
                      variant="contained"
                      className="cancel-btn"
                      onClick={() => setOpenAdd(false)}
                      color="primary"
                      sx={{ marginRight: "1em" }}
                    >
                      Cancel
                    </MButton>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Modal>
</>
);}