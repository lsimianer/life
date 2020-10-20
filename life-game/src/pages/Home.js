import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import EditIcon from '@material-ui/icons/Edit';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Navbar from '../components/Navbar'
import ControlPanel from '../components/ControlPanel'


const useStyles = makeStyles((theme) => ({    
    contolCon:{
        backgroundColor:"black",
        positon:"fixed",
        height:"25vh",
        top: 'auto',
        bottom: 0,
    },
    gameScreen:{
        height:"70vh"
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },   
  }));


const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            {/* game screen */}
            <Container className={classes.gameScreen}>
                game board
            </Container>
            {/* control panel */}
            <Container className={classes.contolCon}>
                <ControlPanel/>
            </Container>

        </>
    );
}

export default Home;
