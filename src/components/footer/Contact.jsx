import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import { Tab } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../footer/contact.css';


export default function BasicGrid() {
  return (
    <div className='m-contact'>
      <h1 id='f-contactName'>Contacts</h1>
      <Box sx={{ flexGrow: 1, margin: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tab icon={<EmailIcon/>} iconPosition='start'/>phiweloliza@gmail.com
          <Tab icon={<LocalPhoneIcon/>} iconPosition='start'/>0670811795
          <Tab icon={<LinkedInIcon/>} iconPosition='start'/>linkedin.com/in/phiwe-mazwi
        </Grid>
      </Grid>
    </Box>
    </div>
    
  );
}
