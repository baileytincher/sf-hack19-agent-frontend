import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';

import BellOutline from 'mdi-material-ui/BellOutline';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import ArrowLeft from 'mdi-material-ui/ArrowLeft';

import logo from './sf-logo-white.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  media: {
    height: '30px',
    padding: '0.5em',
  },
  topbar: {
    backgroundColor: "#D03C31",
  },
  backButton: {
    height: 30,
    width: 30,
    padding: 7
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.topbar}>
      <Toolbar >
        <Grid container direction="row" justify="space-between" align-items="center" >
          <Grid item style={{height: "100%"}} >
            <ArrowLeft className={classes.backButton} />
          </Grid>

          <Grid item >
            <img src={logo} className={classes.media} />
          </Grid>

          <Grid item >
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <BellOutline />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
