import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    title:{
        flexGrow:1
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    }
}));
const NavBar = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton color="inherit" className={classes.menuButton} onClick={()=> props.handlerDrawerToggle()}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>Moises Velasquez</Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
