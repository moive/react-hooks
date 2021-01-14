import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import DeckIcon from '@material-ui/icons/Deck';

const Lists = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary='My first element' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText primary='My second element' />
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}

export default Lists
