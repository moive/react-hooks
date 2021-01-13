import { Button, Icon, Typography } from '@material-ui/core';
import React from 'react'

const MaterialUi = () => {
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
        </div>
    )
}

export default MaterialUi
