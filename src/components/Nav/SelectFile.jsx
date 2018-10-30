import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import WifiIcon from '@material-ui/icons/Wifi';

import './SelectFile.scss';

const { dialog } = window.require('electron').remote;

export default class SelectFile extends Component {

    showDialog = () => {
        //console.log("Clicked");

        console.log(dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }))
    };

    render() {
        return (
            <Button variant="contained" size="small" color="primary" onClick={this.showDialog.bind(this)}>
                <WifiIcon className="pcap-icon"/> Select PCAP
            </Button>
        );
    }
}