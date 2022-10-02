// import * as React from "react";
import React, { useEffect, useState } from "react";
import { TopToolbar,useGetList, Button } from 'react-admin';

import { Tabs, Tab, Box, Typography, FormLabel } from "@mui/material";

 
let date = new Date();
  
export const AddUserDetails = ({totalRecords, setOpenAdd, openAdd}) => {

    

    console.log('#TOTAL',totalRecords, totalRecords?.total)

  return (
      <>
        <TopToolbar className='user-toolbar'>
        {/* Add your custom actions */}
        <Box sx={{ marginTop: "10px", marginRight: "8px"}}>
        <Typography
                        variant="h5"
                        component="h2"
                        align="left" 
                        sx={{ fontSize: '14px', marginTop:'20px',fontWeight:"600" }}
                    >
                      Total count <Button sx={{ background: 'none',border: '1px solid blue',color:'black',fontWeight:"600",
                      borderRadius: '10px',padding: '2px', marginLeft:'15px',minWidth: '48px',marginBottom:'10px' }}>{totalRecords?.total}</Button>
              </Typography>
              </Box>     
              <FormLabel>Show</FormLabel>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginTop: "10px", marginRight: "8px"}}>
          <input
            type="radio"
            name="radio"
            value="All"
            // checked={selected === "All"}
            // onChange={(e) => handleChange(e)}
          />
          <FormLabel>All</FormLabel>
        </Box>
        <Box sx={{ marginTop: "10px", marginRight: "8px" }}>
          <input
            type="radio"
            name="radio"
            value="Pending"
            // checked={selected === "Pending"}
            // onChange={handleChange}
          />
          <FormLabel>Pending</FormLabel>
        </Box>
        <Box sx={{ marginTop: "10px", marginRight: "8px" }}>
          <input
            type="radio"
            name="radio"
            value="Resolved"
            // checked={selected === "Resolved"}
            // onChange={handleChange}
          />
          <FormLabel>Resolved</FormLabel>
        </Box>
        <Button onClick={setOpenAdd}>ADD</Button>
      </Box>
       </TopToolbar>
    </>
  );
}
