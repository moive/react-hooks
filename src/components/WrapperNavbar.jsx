import React from 'react';
import { makeStyles } from '@material-ui/core'
import NavBar from './NavBar';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}));
const WrapperNavbar = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <NavBar/>
        </div>
    )
}

export default WrapperNavbar
