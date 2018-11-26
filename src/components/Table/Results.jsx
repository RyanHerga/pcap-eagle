import React, { Component } from 'react';
import _ from 'underscore';

import './Results.scss';

import PacketRow from './PacketRow.jsx';
import HeaderRow from './HeaderRow.jsx';

export default class Results extends Component {
    showDetails(model){
        this.props.showDetails(model);
    }

    render() {
        const {models} = this.props;
        console.log("Results Updated", models);

        const result = _.map(models, (packet, i) => <PacketRow model={packet} showDetails={(model) => this.showDetails(model)} key={i} index={i}/>);

        return (
            <div className="results">
                <HeaderRow />
                {result}
            </div>
        )
    }
}