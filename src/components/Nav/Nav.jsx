import React, { Component } from 'react';

import Search from './Search.jsx';
import SelectFile from './SelectFile.jsx';
import Grid from '@material-ui/core/Grid';

import './Nav.scss';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.loadModels = this.loadModels.bind(this);
    }

    loadModels(models) {
        this.props.loadModels(models);
    }

    render() {
        return (
            <div className="nav">
                <SelectFile loadModels={this.loadModels}/>
                <Search />
            </div>
        );
    }
}