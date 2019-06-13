import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import TopBar from './TopBar';
import ClientCard from './ClientCard';

const useStyles = makeStyles(theme => ({
}));

const Claim = (props) => {
  const classes = useStyles();

  return (
    <div id="claim">
      <TopBar />
      <ClientCard
        sampleImage="accident.jpg"
        clientName="Bailey Tincher"
        type="Multi-Accident"
        timeSince="1h ago"
      />
    </div>
  );
};

export default Claim;
