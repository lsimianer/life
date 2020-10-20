import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar:{
        backgroundColor:"black"
    }   
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Life 
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    );
}

export default Navbar;
