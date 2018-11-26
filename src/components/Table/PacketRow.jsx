import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import {findApplication} from '../../utils/protocol/find';

import './PacketRow.scss';

export default class PacketRow extends Component {

    getMoreInfo = () => {
        this.props.showDetails(this.props.model);
    }

    decodeData() {
        let data = this.props.model.payload;
        let sourceIP = _.get(data, 'payload.saddr', _.get(data, 'payload.sender_pa', [])).toString();
        //console.log(_.get(data, 'payload.saddr', _.get(data, 'payload.sender_pa', [])).toString());
        let destinationIP = _.get(data, 'payload.daddr', _.get(data, 'payload.target_pa', [])).toString();
        let protocol = _.get(data, 'payload.decoderName', 'Unknown').toUpperCase();;
        let content = _.get(data, 'payload.payload.data', '');
        let sport = _.get(data, 'payload.payload.sport', 0);
        let dport = _.get(data, 'payload.payload.dport', 0);
        let excrept = "";
        let application = findApplication(sport) || findApplication(dport);
        application = application.toUpperCase();

        if(content) {
            try {
                content = content.toLocaleString();
                if(dport === 80 || sport === 80) {
                    application = "HTTP";
                    excrept = content.split('\n')[0];
                    if(excrept.indexOf("HTTP") === -1) {
                        excrept = "";
                    }
        
                    //console.log(excrept);
                }
            }
            catch(error) { 
                //ignore
            }
        }

        
        
        if(protocol === "IPV4") {
                protocol = _.get(data, 'payload.payload.decoderName', protocol).toUpperCase();
        }

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

        let packetClass = 'row'
        if(application != '') {
            packetClass += ' ' + application.toLowerCase() + '-row';
        }

        return (
            <div className={packetClass} onClick={this.getMoreInfo.bind(this)}>
                <Grid container spacing={16}>
                    <Grid item xs={1}>
                        {this.props.index+1}
                    </Grid>
                    <Grid item xs={3}>
                        {sourceIP}
                    </Grid>
                    <Grid item xs={3}>
                        {destinationIP}
                    </Grid>
                    <Grid item xs={2}>
                        {protocol}
                    </Grid>
                    <Grid item xs={2}>
                        {application}
                    </Grid>
                </Grid>
            </div>
        );
    }
}