import React, { Fragment } from 'react';
import { ListItemText, ListItem, Avatar, Divider } from '@material-ui/core';
import Loader from './Loader';
import { Link } from 'react-router-dom'
import { getId, getInitials } from '../Utils';
import { PeopleListContainer, Button } from '../global.styles';
import InfiniteScroll from "react-infinite-scroll-component";

const PeopleList = ({ items, hasNextPage, onNextPage, divider}) => {

    return(
        <Fragment>
            <PeopleListContainer id="nav" component="nav" disablePadding={divider}>
                <InfiniteScroll 
                    dataLength={items.length}
                    next={onNextPage} 
                    hasMore={true}
                    loader={hasNextPage && <Loader />}
                    style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
                >
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

                </InfiniteScroll>
                {hasNextPage &&
                    <ListItem button onClick={onNextPage} >
                        <Button primary="Load more..." />
                    </ListItem>
                }
            </PeopleListContainer>

        </Fragment>
    )
}


export default PeopleList;