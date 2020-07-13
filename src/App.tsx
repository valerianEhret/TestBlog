import React from 'react';

import './App.css';
import {Blog} from "./components/Blog";
import {Navbar} from "./components/Navbar/Navbar";
import {StoreType} from "./redux/store";

type AppPropsType = {
store:StoreType
}


function App(props:AppPropsType) {
    return (
        <div className="App">
            <Navbar/>
            <Blog store={props.store}/>
        </div>
    );
}

export default App;
