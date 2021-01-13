import { Button, Icon, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles({
    custonBtn:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
});

const MaterialUi = () => {
    const classes = useStyle();
    const ClickMe = ()=> {
        console.log("Click me...!");
    }
    return (
        <div className="mt-5">
            <Typography variant="h1" color="initial">
                Material UI
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={()=> ClickMe()}
                startIcon={<Icon>start</Icon>}
            >Click me!</Button>
            <Typography variant="body2" paragraph color="initial">Testing...!</Typography>
            <Button className={classes.custonBtn}>
                My customize button
            </Button>
        </div>
    )
}

export default MaterialUi
