import React from 'react';
import './Threb.css';
import {paraments} from './../../JS/Threb/paraments.js'

function Threb() {
    return ( 
        <div className='all_block_threb'>
            <div className='block_threb'>
                {paraments.map((parametr)=> <span className={parametr.image}/>)}
            </div>
        </div>
     );
}

export default Threb;