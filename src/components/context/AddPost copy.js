// import * as React from "react";
import React, { useEffect, useState } from "react";
import { TopToolbar, useGetList, Button } from "react-admin";
import Box from "@mui/material/Box";
import MButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Grid from "@mui/material/Grid";
import vtsDataProvider from "./../providers/dataProvider";
import TextField2 from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "../views/users/users.css";
import SendNotification from "../utils/sendNotification";
import CloseIcon from "@mui/icons-material/HighlightOffOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
const Buttonstyle = {
  position: "absolute",
  background: "blue",
  color: "#fff",
  zIndex: 1,
  textTransform: "capitalize",
  width: "100px",
};
const successstyle = {
  color: "blue",
  fontSize: "14px",
};

const errorstyle = {
  color: "red",
  fontSize: "12px",
};

let date = new Date();
const defaultValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  roleid: "",
  createdon: date,
  userLimit: "",
  deviceLimit: "",
  disabled: "",
  showPassword: false,
};

export const AddUserDetails = ({ totalRecords }) => {
  const [notifyData, setNotifyData] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setIsSubmit(false);
  };
  const handleClose = () => {
    setFormValues({});
    setOpen(false);
  };

  const [formErrors, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);
  const [userroles, setUserrole] = useState([]);

  const { data: userrole, total, isLoading } = useGetList("userrole");

  useEffect(() => {
    const getuserdata = () => {
      if (userrole) setUserrole(userrole);
    };
    getuserdata();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      vtsDataProvider.create("users", formValues, setNotifyData);
      setFormValues(defaultValues);
      handleClose();
    }
  }, [formErrors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    // const regex ='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    //const phoneregex = '/^[0-9]{10}$/';
    if (!values.name) errors.name = "Name is required!";

    if (!values.phone) errors.phone = "Phone is required!";
    //  else if(!phoneregex.match(values.phone))
    //      errors.phone = "Phonenumber must be 10 digit";

    if (!values.email) errors.email = "Email is required!";
    //  else if(!regex.match(values.email))
    //      errors.email = "This is not a valid email format!";

    if (!values.roleid) errors.rolename = "Role is required!";
    return errors;
  };

  const togglePassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };



  return (
    <>
      <TopToolbar className="user-toolbar">
        {/* Add your custom actions */}
        <Typography
          variant="h5"
          component="h2"
          align="left"
          sx={{ fontSize: "14px", marginTop: "20px", fontWeight: "600" }}
        >
          Total count{" "}
          <Button
            sx={{
              background: "none",
              border: "1px solid blue",
              color: "black",
              fontWeight: "600",
              borderRadius: "10px",
              padding: "2px",
              marginLeft: "15px",
              minWidth: "48px",
              marginBottom: "10px",
            }}
          >
            {totalRecords?.total}
          </Button>
        </Typography>
        <MButton
          className="Adduser"
          onClick={handleOpen}
          startIcon={<AddIcon />}
          sx={Buttonstyle}
        >
          Add User
        </MButton>
      </TopToolbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="AdduserModal"
      >
        <Box sx={style} className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User
          </Typography>
          <span className="close-btn" onClick={handleClose}>
            <CloseIcon />
          </span>
          {/* {
                (Object.keys(formErrors).length === 0 && isSubmit)?(<div style={successstyle}>User Created Successfully</div>):
                (<pre></pre>)
                //(<pre>{JSON.stringify(formValues,undefined,2)}</pre>)
            } */}

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, marginTop: "2em" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="h6" component="h4">
                    Personal Inormation
                  </Typography>
                  <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Name</FormLabel>
                    <TextField2
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      value={formValues.name}
                      onChange={handleInputChange}
                    />
                    <div style={errorstyle}>{formErrors.name}</div>
                  </Box>
                  <Box sx={{ marginTop: "1em" }}>
                    <FormLabel>Phone</FormLabel>
                    <TextField2
                      name="phone"
                      placeholder="10 Digit Mobile No"
                      type="text"
                      value={formValues.phone}
                      onChange={handleInputChange}
                    />
                    <div style={errorstyle}>{formErrors.phone}</div>
                  </Box>
                  <Box sx={{ marginTop: "1em" }}>
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
                    </Box>
                  </Box>
                  <div style={{ marginTop: "1em" }} className="modal-footer">
                    <MButton variant="contained" color="primary" type="submit">
                      Create
                    </MButton>
                    <MButton
                      variant="contained"
                      className="cancel-btn"
                      onClick={handleClose}
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
      <SendNotification data={notifyData} onClose={() => setNotifyData({})} />
    </>
  );
};
