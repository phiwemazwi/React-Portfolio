import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../bodySection/gridlayout.css';
import MyCards from './Cards/IBM';
import MyReact from './Cards/React';
import MyJavaScript from './Cards/JavaScript';
import MyCsharp from './Cards/Csharp';
import binary from '../images/bg.png'

const styles = theme => ({
  root: {
  flexGrow: 1
  },
  paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
  }
  });

const Gridlayout = withStyles(styles)(({ classes }) => (
  <div className="s">
    <div className="s-left">
        <div className="s-card bg"></div>
        <div className="s-card">
          <img src={binary} alt="" className="s-img" />
        </div>
    </div>
    <div className="s-right">
    <div className={classes.root}>
      
    <p id='g-skills'>Skills</p>
        <Grid container spacing={6}>
              <Grid item sm={6}>
                <MyCards/>
              </Grid>
              <Grid item sm={6}>
                <MyReact/>
              </Grid>
              <Grid item sm={6}>
                <MyJavaScript/>
              </Grid>
              <Grid item sm={6}>
                <MyCsharp/>
              </Grid>
        </Grid>
        </div>
    </div>
    
  </div>

));
export default Gridlayout;