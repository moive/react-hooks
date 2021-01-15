import React from 'react';
import { Divider, Drawer, makeStyles } from '@material-ui/core'
import Lists from './Lists';

const drawerWidth= 240;

const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink:0
    },
    drawerPaper:{
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
}));
const DrawerNav = (props) => {
    const classes = styles();
    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper:classes.drawerPaper
            }}
            variant={props.variant}
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <Lists></Lists>
        </Drawer>
    )
}

export default DrawerNav
