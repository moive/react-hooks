import React from 'react';
import { Box, Grid } from '@material-ui/core'

const BoxContent = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box p={2} color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam doloremque quam. Veniam provident molestias sapiente suscipit officiis, sint neque mollitia inventore accusamus iusto aut a iste eos fugit dolor!</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box p={2} color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam doloremque quam.</Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default BoxContent
