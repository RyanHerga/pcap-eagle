import React, { Component } from 'react';

import './App.scss';

import Nav from './components/Nav/Nav.jsx';
import Results from './components/Table/Results';
import samplePackets from './SamplePackets';

import { createStore } from 'redux'
import packetStore from './reducers/file';

const store = createStore(packetStore);

export default class App extends Component {

    constructor(props){
        super(props);
        this.updateResults = () => {
            this.forceUpdate();
        }
        store.subscribe(this.updateResults);
    }
    render() {
        let packets = store.getState();
        console.log(packets);

        return ( 
            <div id="capture-dashboard">
                <Nav loadModels={(models) => store.dispatch({ type: 'load', models: models })} />
                <div className="main-content">
                    <div className="wrapper">
                        <Results models={packets}/>
                    </div>
                </div>
            </div>
        );
    }
}



