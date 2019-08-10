import React, { Component } from 'react';
import { render } from "react-dom";
import $ from "jquery";
import { List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { getId, getInitials } from '../Utils';
class AutoLoading extends Component {
  constructor(props, id, loading, nextPageButton, onNextPage, divider, divider) {
    super();
  }

  componentDidMount(props, id, loading, nextPageButton, onNextPage, divider, divider) {
    // window.onscroll = scroll
    $( "#root" ).scroll(function() {
      $( "#root" ).append( <List component="nav" disablePadding={divider}>
      {items.length !== 0 &&
          items.map(({ name, mass, height, url }) =>
              <Fragment key={getId(url)}>
                  {divider && <Divider />}
                  <ListItem button component={Link} to={`/people/${getId(url)}`} >
                      <Avatar>{getInitials(name)}</Avatar>
                      <ListItemText primary={name} secondary={`Weight: ${mass}, Height: ${height}CM, `} />
                  </ListItem>
              </Fragment>
          )
      }
      {nextPageButton &&
          <ListItem button onClick={onNextPage} >
              <ListItemText primary="Load more..." />
          </ListItem>
      }
      </List> );
    });
    // if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight - 100) {
    //   document.getElementById('pagination').innerHTML += 'test<br />test<br />test<br />test<br />test<br />'
    //   console.log(innerHeight)
    // }
  }
};


export default AutoLoading;



    