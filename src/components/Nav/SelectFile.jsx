import React, { Component } from 'react';

//import Button from '@material-ui/core/Button';
import OpenIcon from '@material-ui/icons/FolderOpen';

import './SelectFile.scss';

const { dialog, FileFilter } = window.require('electron').remote;
const {decode} = require('../../utils/decode/index.js');

var pcapp = window.require('pcap-parser');

export default class SelectFile extends Component {
    constructor(props) { 
        super(props);
        this.loadModels = this.props.loadModels.bind(this);
    }

    showDialog = () => {
        const filter = [{name: 'pcap', 'extensions':['pcap']}];

        const files = dialog.showOpenDialog({ properties: ['openFile'], filters: filter });
        
        const file = (files) ? files[0] : undefined;
        let packets = [];
        let decoded = [];

        
        if(file) {
            let parser = pcapp.parse(file);
            parser.on('packet', (packet) => {
                packets.push(packet.data);
                decoded.push(decode(packet.data));
            }).on('end', (data) => {
                //console.log(packets);
                this.loadModels(decoded);
            }).on('globalHeader', (data) =>{
                //console.log(data);
            })
        }
    };

    render() {
        //console.log("Rendered");
        return (
            <button className="select-file-btn" onClick={this.showDialog.bind(this)}>
                <OpenIcon className="pcap-icon"/>
            </button>
        );
    }
}