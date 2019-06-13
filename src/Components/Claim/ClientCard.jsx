import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  clientCard: {
    marginTop: '14px',
    marginBottom: '14px',
    marginRight: '10px',
    marginLeft: '10px',
    padding: '4px',

    height: 'auto'
  },
  sampleImage: {
    height: "50px",
    width: "50px"
  },
  cardType: {
    color: "gray"
  },
  textContainer: {
  },
  timeSinceText: {
    color: "#D03C31"
  },
  desc: {
    color: "gray",
  },
}));

const ClientCard = (props) => {
  const classes = useStyles();

  return (
    <Card id="claimant" className={classes.clientCard} style={{paddingLeft: "10px"}}>
      <Typography variant="subtitle2" className={classes.desc} >
        {props.personType}
      </Typography>
      <Typography variant="h5" className={classes.title}>
        {props.name || "UNKNOWN"}
      </Typography>

      <Divider />

      <Grid container direction="row" style={{height: "100%"}} >
        <Grid item container direction="column" >
          <Grid item container >
            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                POLICY NUMBER
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.policyNumber || "UNKNOWN"}
              </Typography>
            </Grid>

            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                EFFECTIVE
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.effective || "UNKNOWN"}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container >
            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                MAKE
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.make || "UNKNOWN"}
              </Typography>
            </Grid>

            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                MODEL
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.model || "UNKNOWN"}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container >
            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                YEAR
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.year || "UNKNOWN"}
              </Typography>
            </Grid>

            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                VIN
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.vin || "UNKNOWN"}
              </Typography>
            </Grid>
          </Grid>

          <Grid item container >
            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc || "UNKNOWN"}>
                AGENT
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.agent || "UNKNOWN"} &ensp;<span style={{color:"blue"}}>{props.agentNumber}</span>
              </Typography>
            </Grid>

            <Grid item className={classes.textContainer} style={{width:"50%",}}>
              <Typography variant="subtitle2" className={classes.desc}>
                COVERAGE
              </Typography>
              <Typography variant="body2" className={classes.title}>
                {props.coverage || "UNKNOWN"}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Card>
  );
};

export default ClientCard;
