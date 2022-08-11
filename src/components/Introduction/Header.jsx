import React from 'react'
import  "./header.css"
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';//   |----
import InfoIcon from '@mui/icons-material/Info';//                 |
import LaptopIcon from '@mui/icons-material/Laptop';//             |----


function Header() {


  return (
    <React.Fragment>
        <AppBar>
        <Toolbar sx={{background:'#84a8ba'}}>
            <Tabs sx={{marginLeft: 'auto',color:'white', fontFamily: 'Kanit'}} >
                <Tab icon={<LaptopIcon/>} iconPosition="end" label="SKILLS" href='#g-skills'/>
                <Tab icon={<InfoIcon/>} iconPosition="end" label="ABOUT" a href='#a-title'/>
                <Tab icon={<PhoneInTalkIcon/>} iconPosition="end" label="CONTACT" a href='#f-contactName'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header