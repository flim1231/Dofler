import React from 'react';
import cl from './TwoBlock.module.css'
import Oneb from './Oneb/Oneb.jsx';
import Twob from './Twob/Twob.jsx';
import {paraments} from './../JS/Oneb/paraments'
import Threb from './Threb/Threb';

function TwoBlock() {
    return ( 
        <div className={cl.allBlock}>
            <Oneb paraments={paraments}/>
            <Twob />
            <Threb />
            
        </div>
     );
}

export default TwoBlock;