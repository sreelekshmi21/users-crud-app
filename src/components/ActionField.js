
import React,{useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    padding: 20,
  },
}));



export default function ActionField({open, setOpen, currentUser}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [editUser, setEditUser] = useState(currentUser)


  useEffect(() => {
    console.log('#handleChange', currentUser)
    setEditUser(currentUser)
  }, [currentUser])

  
  
  const handleChange = (e) =>{
    const {name,value} = e.target
    
    console.log('#handleChange', name,value)

    setEditUser({
        ...editUser,
        [name]: value
    })
}

const handleSubmit = (e) =>{
  
    e.preventDefault()
    console.log('#handleChange')

    // props.updateUser(user.id, user)
   
}

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div style={modalStyle} className={classes.paper}>
        <h2>Modal</h2>{" "}
        <form>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <TextField 
                  id="name" 
                  name="name"
                  label="Name" 
                  variant="outlined"  
                  value={editUser?.name}
                  onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField 
                  id="username" 
                  name="username" 
                  label="Username" 
                  variant="outlined"  
                  value={editUser?.username}
                  onChange={handleChange} 
              />
            </Grid>
            <Grid item>
              <TextField 
                  id="phone" 
                  name="phone" 
                  label="Phone" 
                  variant="outlined"  
                  value={editUser?.phone}
                  onChange={handleChange} 
              />
            </Grid>
            <Grid item>
              <TextField 
                 id="website" 
                 name="website" 
                 label="Website" 
                 variant="outlined"  
                 value={editUser?.website}
                 onChange={handleChange}  
              />
            </Grid>
            <Grid item>
              <TextField 
                 id="company" 
                 name="company" 
                 label="Company" 
                 variant="outlined"  
                 value={editUser?.company}
                 onChange={handleChange}  
              />
            </Grid>
            <Grid item>
              <Button 
              color="primary" 
              variant="contained"
              onClick={handleSubmit}
              >
                SAVE
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  )
}
