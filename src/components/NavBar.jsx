import React, {Fragment} from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow:1
    }
}));
const NavBar = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton color="inherit" className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Moises Velasquez</Typography>
                    <Button variant="text" color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </Fragment>
    )
}

export default NavBar
