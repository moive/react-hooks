import React, {useState} from 'react';
import { Hidden, makeStyles } from '@material-ui/core'
import NavBar from './NavBar';
import DrawerNav from './DrawerNav';
import BoxContent from './BoxContent';


const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
const WrapperNavbar = () => {
    const [openMobile, setOpenMobile] = useState(false);

    const handlerDrawerToggle = ()=> {
        setOpenMobile(!openMobile);
    }

    const classes = styles();
    return (
        <div className={classes.root}>
            <NavBar handlerDrawerToggle={handlerDrawerToggle}/>
            <Hidden xsDown>
                <DrawerNav
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerNav
                    variant="temporary"
                    open={openMobile}
                    onClose={handlerDrawerToggle}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <BoxContent/>
            </div>
        </div>
    )
}

export default WrapperNavbar
