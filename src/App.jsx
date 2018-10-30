import React, { Component } from 'react';

import './App.scss';

import Nav from './components/Nav/Nav.jsx';
import Table from './components/Table/Table.jsx'

export default class App extends Component {
    render() {
        return ( 
            <div id="capture-dashboard">
                <Nav />
                <Table />
            </div>
        );
    }
}