import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  claimCard: {
    marginTop: '14px',
    marginBottom: '14px',
    marginRight: '10px',
    marginLeft: '10px',
    paddingLeft: '4px',
    height: '100px'
  },
  sampleImage: {
    height: "100%",
    width: "100px"
  },
  nameText: {

  },
  textContainer: {
    padding: "10px"
  },
  timeSinceText: {
    color: "#D03C31"
  }
}));

const ClaimCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.claimCard}>
      <Grid container justify="flex-end" direction="row" style={{height: "100%"}}>
        <Grid item container xs justify="flex-start" direction="column" className={classes.textContainer}>
          <Grid item >
            <Typography variant="h6" className={classes.title}>
              {props.clientName}
            </Typography>
          </Grid>

          <Grid item >
            <Typography variant="subtitle1" className={classes.title}>
              {props.type}
            </Typography>
          </Grid>

          <Grid item >
            <Typography variant="body2" className={classes.timeSinceText}>
              {props.timeSince}
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{height: "100%"}} >
          <CardMedia
            component="img"
            className={classes.sampleImage}
            image={props.sampleImage}
          />
        </Grid>

      </Grid>

    </Card>
  );
};

export default ClaimCard;
