import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './HeaderRow.scss';

export default class HeaderRow extends Component {
    render() {
        return (
            <div className="header-row">
                <Grid container spacing={16}>
                    <Grid item xs={1}>
                        ID
                    </Grid>
                    <Grid item xs={3}>
                        Source IP
                    </Grid>
                    <Grid item xs={3}>
                        Destination IP
                    </Grid>
                    <Grid item xs={2}>
                        Protocol
                    </Grid>
                    <Grid item xs={2}>
                        Application
                    </Grid>
                </Grid>
            </div>
        );
    }
}