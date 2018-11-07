import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import {findProtocol} from '../../utils/protocol/find';

import './PacketRow.scss';

export default class PacketRow extends Component {
    decodeData() {
        let data = this.props.model.payload;

        console.log(data);

        let sourceIP = _.get(data, 'payload.saddr.addr', _.get(data, 'payload.sender_pa.addr', [])).join('.');
        let destinationIP = _.get(data, 'payload.daddr.addr', _.get(data, 'payload.target_pa.addr', [])).join('.');
        let protocol = _.get(data, 'payload.decoderName', 'Unknown');

        if(protocol === "ipv4") {
                protocol = _.get(data, 'payload.payload.decoderName', protocol)
        }

        return {
            sourceIP,
            destinationIP,
            protocol
        }
    }

    render() {
       let {sourceIP, destinationIP, protocol} = this.decodeData();

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
                    <Grid item xs={2}>
                        {protocol}
                    </Grid>
                    <Grid item xs={2}>
                        Unknown
                    </Grid>
                    <Grid item xs={2}>
                        ...
                    </Grid>
                </Grid>
            </div>
        );
    }
}