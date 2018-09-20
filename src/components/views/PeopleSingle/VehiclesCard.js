import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@material-ui/core';
import { getId, getInitials } from '../../../Utils';

const VehiclesCard = ({ vehicles }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Vehicles</Typography>
                    <Typography color="textSecondary" >Vehicles that this person has piloted</Typography>
                </CardContent>
                <List disablePadding>
                    {vehicles.map(({ url, name, model, vehicle_class }) => {
                        return (
                            <Fragment key={getId(url)}>
                                <Divider />
                                <ListItem button >
                                    <ListItemAvatar>
                                        <Avatar>{getInitials(name)}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={name}
                                        secondary={`${vehicle_class}, model ${model}`} />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default VehiclesCard;