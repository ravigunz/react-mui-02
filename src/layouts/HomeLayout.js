import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  
}));

export default function HomeLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{xs: 2, md: 3}} direction='row' justifyContent='space-between'>
        <Grid item xs={2}>
          <Typography variant='h3'>Left Menu</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h3'>Main Dashbord</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
