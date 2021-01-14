import React from 'react';
import {Hidden, Typography, withWidth, Button} from '@material-ui/core';
const Occult = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Width Screen: {props.width}
            </Typography>
            <Hidden smDown>
                <Button variant="contained" color="secondary">
                    sm
                </Button>
            </Hidden>
            <Hidden smUp>
                <Button variant="contained" color="primary">
                    md
                </Button>
            </Hidden>
            <Hidden only={['lg','md']}>
                <Button variant="contained" color="default">
                    lg
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Occult)
