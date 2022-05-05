import React from 'react';
import './OneBl.css'
import {parameters} from './../../JS/FourBlock_OneBl/paremeters.js'

function OneBl() {
    return ( 
        <div className="allBlockONE">
            {parameters.map((parametr) => <div className={parametr.box + ' ' + parametr.poll} >
                <span className={parametr.image}/>
                <p className={parametr.paragraf}>{parametr.text}</p>
                <h6>{parametr.name}</h6>
            </div>)}

            <div className='block_text_ONE'>
                <h1>Inspiracje</h1>
                <p>Rozwój to umiejętność patrzenia na świat przez pryzmat różnorodności doświadczeń<br/>otaczających nas osób. Dzielimy się tym, co nas „kręci” i dziękujemy za wszelkie<br/>inspiracje, które nadają sens naszym działaniom.</p>
            </div>
            <p className='paragraf_ONEBLOCK'>„Inspiracja istnieje, ale musi zastać cię przy pracy!” –<br/>Pablo Picasso, 1881-1973 n.e.</p>
        </div>
     );
}

export default OneBl;