import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import {findProtocol} from '../../utils/protocol/find';

import './PacketRow.scss';

export default class PacketRow extends Component {
    decodeData() {
        let data = this.props.model.payload;
        let sourceIP = _.get(data, 'payload.saddr.addr', _.get(data, 'payload.sender_pa.addr', [])).join('.');
        let destinationIP = _.get(data, 'payload.daddr.addr', _.get(data, 'payload.target_pa.addr', [])).join('.');
        let protocol = _.get(data, 'payload.decoderName', 'Unknown').toUpperCase();;
        let content = _.get(data, 'payload.payload.data', '').toLocaleString();
        let sport = _.get(data, 'payload.payload.sport', 'Unknown');
        let dport = _.get(data, 'payload.payload.dport', 'Unknown');

        let excrept = "";
        let application = "";

        if(protocol === "IPV4") {
                protocol = _.get(data, 'payload.payload.decoderName', protocol).toUpperCase();
        }

        if(dport === 80 || sport === 80) {
            application = "HTTP";
            excrept = content.split('\n')[0];
            if(excrept.indexOf("HTTP") === -1) {
                excrept = "";
            }

            //console.log(excrept);
        }
        
        console.log(dport);
       
        

        return {
            content,
            sourceIP,
            destinationIP,
            protocol,
            application,
            excrept,
            sport,
            dport
        }
    }

    render() {
       let {content,
        sourceIP,
        destinationIP,
        protocol,
        application,
        excrept,
        sport,
        dport} = this.decodeData();

        return (
            <div className="row">
                <Grid container spacing={16}>
                    <Grid item xs={1}>
                        {this.props.index+1}
                    </Grid>
                    <Grid item xs={2}>
                        {sourceIP}
                    </Grid>
                    <Grid item xs={2}>
                        {destinationIP}
                    </Grid>
                    <Grid item xs={1}>
                        {protocol}
                    </Grid>
                    <Grid item xs={1}>
                        {application}
                    </Grid>
                    <Grid item xs={4}>
                        {excrept}
                    </Grid>
                </Grid>
            </div>
        );
    }
}