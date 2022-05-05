import React from 'react';
import cl from './FourBlock.module.css'
import TwoBl from './TwoBl/TwoBl';
import OneBl from './OneBl/OneBl.jsx';
import ThreBl from './ThreBl/ThreBl.jsx';



function FourBlock() {
    return ( 
        <div className={cl.allBlock}>
            <OneBl />
            <TwoBl />
            <ThreBl />
        </div>
     );
}

export default FourBlock;