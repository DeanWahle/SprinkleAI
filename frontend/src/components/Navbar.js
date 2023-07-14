import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxShadow: 'none', // remove box-shadow
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
  },
}));

function Navbar() {
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/" className={classes.link}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/generate" className={classes.link}>
          Generate Cover Letter
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
