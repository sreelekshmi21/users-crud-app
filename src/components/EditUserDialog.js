
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
import ActionField from './ActionField';


export default function EditUserDialog({ open, setOpen, currentUser }) {
    
   
  return (
    <ActionField open={open} setOpen={setOpen} currentUser={currentUser}/>
  );
}
