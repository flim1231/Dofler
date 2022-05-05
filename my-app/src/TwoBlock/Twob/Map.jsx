import React from 'react';
import './Twob.css';
import {sparaments} from './../../JS/Twob/paraments.js'

function Map() {
    return ( 
        <>
            {sparaments.map((param) => <div className={param.box}><span className={param.cl}></span><p className={param.clP}>{param.text}</p></div>)}
        </>
     );
}

export default Map;