import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import TopBar from './TopBar';
import ClientCard from './ClientCard';
import ClaimeeCard from './ClaimeeCard';

const useStyles = makeStyles(theme => ({
  AccidentImages: {
    paddingLeft: "10px",
    flexWrap: "nowrap",
  },
  AccidentImage: {
    marginRight: "10px",
    width: "100%"
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));

const Claim = (props) => {
  const classes = useStyles();

  // const accidentImages = [
  //   "accident1_1.jpg",
  //   "accident1_2.jpg",
  //   "accident1_3.jpg",
  //   "accident1_4.jpg",
  // ];
  const accidentImages = [
    "accident.jpg",
    "accident.jpg",
    "accident2.jpeg",
  ];

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
      <ClaimeeCard
        personType="CLAIMEE"
        name="JACKIE OH"
        policyNumber="ZZZ 8888-13-99X"
        insurer="STATE FARM"
        make="HONDA"
        model="CIVIC"
        year="2018"
        vin="Z99ZZ99Z087654321"
        effective="Apr 2, 2015 - Apr 1, 2020"
        coverage="BODILY INJURY"
      />
      <GridList className={classes.AccidentImages}>
        {accidentImages.map(aImg => (
          <GridListTile className={classes.AccidentImage}>
            <Card style={{height:"100px"}}>
              <img src={aImg} style={{width:"100%"}} />
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>


  );
};

export default Claim;
