import React, {useState, useEffect} from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Button,
} from "react-admin";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";

import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import Grid from "@mui/material/Grid";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import MenuItem from "@mui/material/MenuItem";


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




let date = new Date();
const defaultValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  roleid: 0,
  map: "",
  latitude: "",
  longitude: "",
  zoom: "",
  poiLayer: "",
  coordinateFormat: "",
  twelveHourFormat: "",
  expirationTime: "",
  deviceLimit: "",
  userLimit: "",
  disabled: false,
  administrator: false,
  readonly: false,
  deviceReadonly: false,
  limitCommands: false,
  createdon: date,
};
export default function AddPost({ open }) {

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState({
    
      name: true,
      phone: true,
      email: true,
      password: true,
      confirm_password: true,
      checkPassword: true
   
  });
  const handleConfirmPassword = (e) => {
    console.log('#T',e.target.value)
    setConfirmPassword(e.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    setFormValues(defaultValues);
    // setFormError({});
    // setIsSubmit(false);
    setConfirmPassword("");
    // setOpen(false);
  };

  const btnStyle = {
  
    backgroundColor: 'blue', 
    color: '#fff',
  };
  
  const phoneregex = "^\\d{10}$";
  
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validate = (values) => {
    const errors = {};
    const phoneregex = "^\\d{10}$";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) errors.name = "Name is required!";
    if (!values.phone) errors.phone = "Phone is required!";
    if (!values.email) errors.email = "Email is required!";
    if (!values.password) errors.password = "Password is required!";
    if (!confirmPassword) errors.confirmPassword = "Enter Confirm Password!";
    if (!values.roleid) errors.rolename = "Role is required!";
    if (values.email !== "") {
      if (!values.email.match(regexEmail))
        errors.email = "This is not a valid email format!";
    }
    if (values.phone !== "") {
      if (!values.phone.match(phoneregex))
        errors.phone = "Phone Number must be 10 digit!";
    }
    if (values.password !== "" && confirmPassword !== "") {
      if (values.password !== confirmPassword)
        errors.password = "Passwords don't match!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(validate(formValues));
    // setIsSubmit(true);
  };

  const [formValues, setFormValues] = useState(defaultValues);

  
  useEffect(() => {
    
    const phoneregex = "^\\d{10}$";
    const ferror = { ...formError };
    
    Object.keys(formValues).some((key) => {
      ferror[key] = false
      if ((formValues[key] == "" || formValues[key] == null)) ferror[key] = true
      
      // if (key == "phone") {
      //   if (!formValues.phone.match(phoneregex)) {
      //     ferror[key] = true;
      //   } else {
      //     ferror[key] = false;
      //   }
      // }
      if (formValues['password'] !== "" && confirmPassword !== "") {
        if (formValues['password'] !== confirmPassword) {
          ferror['checkPassword'] = true;
        } else {
          ferror['checkPassword'] = false;
        }
      }
     
    });
    if(confirmPassword == undefined || confirmPassword == '') ferror['confirm_password'] = true
    else ferror['confirm_password'] = false
    setFormError(ferror);
  }, [formValues,confirmPassword]);


  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="AdduserModal"
    >
      <Box sx={style} className="modal-box">
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, marginTop: "2em" }}>
            <Grid container spacing={2} sx={{ marginLeft: "-7px !important" }}>
              <Grid
                item
                xs={9}
                sx={{ paddingLeft: "5px" }}
                className="right-side"
              >
                <Box sx={{ flexGrow: 1 }} className="div-box">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" component="h4">
                        User Details
                      </Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Box sx={{ marginTop: "1em" }}>
                              <FormLabel>Name</FormLabel>
                              <TextField
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                                error={formError.name}
                                helperText={formError.name && 'NAme is reqd'}
                              />
                             
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ marginTop: "1em" }}>
                              <FormLabel>Phone</FormLabel>
                              <TextField
                                name="phone"
                                placeholder="10 Digit Mobile No" 
                                type="text"
                                value={formValues.phone}
                                onChange={handleInputChange}
                        // error={!formValues.phone.match(phoneregex) || formError.phone ? true : false}
                        error={formError.phone || !formValues.phone.match(phoneregex)}
                        helperText={formError.phone ? 'Phone is Redq' : !formValues.phone.match(phoneregex) ? 'Please Enter 10 digit Phone' : ''}
                              />
                              
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ marginTop: "1em" }}>
                              <FormLabel>Email Address</FormLabel>
                              <TextField
                                name="email"
                                placeholder="Enter Email Address"
                                type="text"
                                autoComplete="false"
                                value={formValues.email}
                                onChange={handleInputChange}
                                error={formError.email || !formValues.email.match(regexEmail)}
                                helperText={formError.email ? 'Email is Redq' : !formValues.email.match(regexEmail) ? 'Please Enter valid email' : ''}
                              />
                              
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            
                          </Grid>
                          <Grid item xs={12} sx={{ marginTop: "1em" }}>
                            <Typography variant="h6" component="h4">
                              Set Password
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Box>
                              <FormLabel>Enter Password</FormLabel>
                              <TextField
                                name="password"
                                placeholder="Enter Password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="false"
                                value={formValues.password}
                                onChange={handleInputChange}
                                error={formError.password || formError.checkPassword}
                                helperText={formError.password ? 'PW is Redq' : formError.checkPassword ? 'Password and CPW do not match' : ''}
                              />

                              {showPassword ? (
                                <EyeIcon
                                  onClick={togglePassword}
                                  sx={{
                                    position: "relative",
                                    bottom: "32px",
                                    left: "222px",
                                  }}
                                />
                              ) : (
                                <VisibilityOffIcon
                                  onClick={togglePassword}
                                  sx={{
                                    position: "relative",
                                    bottom: "32px",
                                    left: "222px",
                                    width: "0.8em !important",
                                  }}
                                />
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box>
                              <FormLabel>Confirm Password</FormLabel>
                              <TextField
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                error={formError.confirm_password}
                                helperText={formError.confirm_password ? 'Conf PW Redq' : ''}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                           <Button disabled={true} className={btnStyle}>SUBMIT</Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
     
    </Modal>
    //   <Create {...props}>
    //     <SimpleForm>
    //                 <ReferenceInput source="userId" reference="users">
    //               <SelectInput optionText="name" />
    //          </ReferenceInput>
    //          <TextInput source="title" />
    //           <TextInput multiline source="body" />
    //      </SimpleForm>
    //  </Create>
  );
}
