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

import logo from './sf-full-white.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    padding: '0.5em'
  },
  media: {
    height: '20px',
    borderRight: '0.1em solid white',
    padding: '0.5em',
  },
  topbar: {
    backgroundColor: "#D03C31",
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.topbar}>
      <Toolbar >
        <img src={logo} className={classes.media} />

        <Typography variant="h6" className={classes.title}>
          Client Claims
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <BellOutline />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
