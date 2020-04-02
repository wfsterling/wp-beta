import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
  simpleFieldWrapper: {
      margin: '.6em 0',

  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="user-email" label="email" type="email" className={classes.simpleFieldWrapper} />
      <TextField id="user-pin" label="pin" type="password" className={classes.simpleFieldWrapper} />
      <Button variant="contained" color="primary">
        Initialize Token
      </Button>
    </form>
  );
}