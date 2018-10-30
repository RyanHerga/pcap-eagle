import React, { Component } from 'react';

import Search from './Search.jsx';
import SelectFile from './SelectFile.jsx';
import Grid from '@material-ui/core/Grid';

import './Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SelectFile />
                    </Grid>
                    <Grid item xs={6}>
                        <Search />
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </div>
        );
    }
}