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
        personType="CLAIMANT"
        name="Bailey Tincher"
        policyNumber="ZZZ 9999-X15-88Z"
        effective="Dec 11, 2014 - Dec 01, 2019"
        make="FORD"
        model="FUSION"
        year="2015"
        vin="Z99ZZ99Z123456780"
        agent="JAKE"
        agentNumber="(800) 782-8332"
        coverage="COMPREHENSIVE"
      />
      <ClientCard
        personType="CLAIMEE"
        name="JACKIE OH"
        policyNumber="ZZZ 9999-X15-88Z"
        effective="Dec 11, 2014 - Dec 01, 2019"
        make="FORD"
        model="FUSION"
        year="2015"
        vin="Z99ZZ99Z123456780"
        agent="JAKE"
        agentNumber="(800) 782-8332"
        coverage="COMPREHENSIVE"
      />
    </div>
  );
};

export default Claim;
