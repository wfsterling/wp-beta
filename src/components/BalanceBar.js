import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GetEthAddress from './GetEthAddress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1.2em 24px",
    color: theme.palette.text.secondary,
    backgroundColor: "#6CC9CD",
  },
  textSize: {
    fontSize: '32px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  balanceGrid: {
    justifyContent: 'space-between',
    paddingRight: '24px',
  },
  balanceTitle: {
    flexGrow: 2,
  },
  balanceValue: {
    flexGrow: '1',
    textAlign: 'right',
    borderBottom: '1px solid #000',
  }
}));



const BalanceBar = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.balanceGrid}>
        <Grid item sm={4} className={classes.balanceTitle}>
          <Typography variant="h4" gutterBottom className={classes.textSize}>
            Balance
          </Typography>
        </Grid>
        <Grid item sm={8} className={classes.balanceValue}>
          <GetEthAddress/>
        </Grid>
      </Grid>
    </div>
  );
};
export default BalanceBar