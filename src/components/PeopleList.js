import React, { Fragment } from 'react';
import { ListItemText, ListItem, Avatar, Divider } from '@material-ui/core';
import Loader from './Loader';
import { Link } from 'react-router-dom'
import { getId, getInitials } from '../Utils';
import { PeopleListContainer, Button } from '../global.styles';


const PeopleList = ({ items, loading, nextPageButton, onNextPage, divider }) => (
    <Fragment>
        <PeopleListContainer component="nav" disablePadding={divider}>
            {items.length !== 0 &&
                items.map(({ name, mass, height, url }) =>
                    <Fragment key={getId(url)}>
                        {divider && <Divider />}
                        <ListItem id="list-item" button component={Link} to={`/people/${getId(url)}`} >
                            <Avatar>{getInitials(name)}</Avatar>
                            <ListItemText primary={name} secondary={`Weight: ${mass}, Height: ${height}CM, `} />
                        </ListItem>
                    </Fragment>
                )
            }
            {nextPageButton &&
                <ListItem button onClick={onNextPage} >
                    <Button primary="Load more..." />
                </ListItem>
            }
        </PeopleListContainer>
        {loading && <Loader />}

    </Fragment>
)


export default PeopleList;