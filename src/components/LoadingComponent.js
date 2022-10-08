import * as React from 'react';
import { Box, Backdrop, Button, CircularProgress } from "@material-ui/core";

export default function LoadingComponent({load}) {
  console.log('#CircularProgress')  
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
      <CircularProgress color="secondary"/>
    
    </Backdrop>
  );
}