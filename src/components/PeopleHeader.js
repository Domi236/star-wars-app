import React, { Component, Fragment } from 'react';
import Header from './Header';
import { IconButton, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase'
import { Search as SearchIcon, FilterList as FilterIcon, Cancel as CacelIcon } from '@material-ui/icons'
import { Redirect } from 'react-router-dom'

class PeopleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: false,
            search: '',
            easterEgg: 0,
            searchSuggestions: ['Luke Skywalker', 'C-3PO', 'Obi-Wan Kenobi', 'Darth Vader', 'R2-D2', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter'],
            suggestions: []
        }
    }
    handleSearch = e => {
        e && e.preventDefault()
        this.props.onSearch && this.props.onSearch(this.state.search)
        this.toggleSearch(false)
    }

    clearSearch = () => {
        this.setState({ search: '' }, this.handleSearch)
    }

    toggleSearch = () => this.setState({ searchOpen: !this.state.searchOpen })

    easterEgg = () => this.setState({ easterEgg: this.state.easterEgg >= 4 ? 0 : this.state.easterEgg + 1 })

    showSuggestions = (e) => {
        this.setState({suggestions: []})
        document.getElementById('suggestion-list').innerHTML = ""

        for(let i = 0; i < this.state.searchSuggestions.length -1; i++)
            
            if (!(e.target.value === ""))
                
                if(this.state.searchSuggestions[i].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                    this.state.suggestions.push(this.state.searchSuggestions[i])
                    document.getElementById('suggestion-list').innerHTML += '<li className="suggestion-list-item" >' + this.state.searchSuggestions[i] + '</li>'
                    }

    }

    previewSearch = e => {
        this.setState({ search: e.target.value})
        this.showSuggestions(e)
    }
    render() {
        const { search, searchOpen } = this.state
        return this.state.easterEgg >= 4 ? <Redirect to="/notification" /> : (
            <Header
                title={search ?
                    <div onClick={this.toggleSearch}>{search}</div> :
                    <div onClick={this.easterEgg}>People</div>}
                color={searchOpen ? 'default' : 'primary'}
                style={{ transition: 'all 200ms ease-out' }}
                centerAction={
                    searchOpen &&
                    <form onSubmit={this.handleSearch}>
                        <Typography variant="title" color="inherit" component="label" >
                            <InputBase
                                id="search"
                                name="search"
                                type="search"
                                value={search}
                                onChange={this.previewSearch}
                                placeholder="Search..."
                                autoFocus
                                style={{ fontSize: 'inherit', width: '100%' }}
                                inputProps={{ style: { width: '100%' } }}
                            />                   
                        </Typography>
                        <ul id="suggestion-list"></ul>
                    </form>
                    
                }
                rightAction={
                    searchOpen ?
                        <Fragment>
                            <IconButton color="inherit" aria-label="Clear Search" onClick={this.clearSearch} >
                                <CacelIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Search" onClick={this.handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </Fragment> :
                        <Fragment>
                            <IconButton color="inherit" aria-label="Filter" onClick={this.props.onFilterOpen}>
                                <FilterIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Search" onClick={this.toggleSearch} >
                                <SearchIcon />
                            </IconButton>
                        </Fragment>
                }
            />
        );
    }
}

export default PeopleHeader;