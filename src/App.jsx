import React, { Component } from 'react';
import _ from 'underscore';
import './App.scss';

import Nav from './components/Nav/Nav.jsx';
import Results from './components/Table/Results.jsx';
import Details from './components/Details/Details.jsx';
import samplePackets from './SamplePackets';

import { createStore } from 'redux'
import file from './reducers/file';
import packetDetails from './reducers/packetDetails';

const packetsStore = createStore(file);
const packetDetailsStore = createStore(packetDetails);

export default class App extends Component {

    constructor(props){
        super(props);
        this.updateResults = () => {
            this.forceUpdate();
        }
        packetsStore.subscribe(this.updateResults);
        packetDetailsStore.subscribe(this.updateResults);
    }

    render() {
        let packets = packetsStore.getState();
        let modelDetail = packetDetailsStore.getState();
        const uniqId = _.uniqueId();
        return ( 
            <div id="capture-dashboard">
                <Nav loadModels={(models) => packetsStore.dispatch({ type: 'load', models: models })} />
                <div className="main-content">
                    <div className="wrapper">
                        <Results models={packets} showDetails={(model) => packetDetailsStore.dispatch({ type: 'load', model: model })}/>
                        <Details key={uniqId} model={modelDetail} />
                    </div>
                </div>
                
            </div>
        );
    }
}



