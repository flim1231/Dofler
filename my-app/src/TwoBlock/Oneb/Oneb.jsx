import React from 'react';
import './Oneb.css';


function Oneb(props) {

    return ( 
        

        <div className='allBlock'>
                <div className='section'>
                {props.paraments.map((parament) => 
                        <h1 className={parament.ud}>{parament.name}  </h1> 
                        )}
                {props.paraments.map((parament) => 
                        <span className={parament.image}/>
                        )}
                {props.paraments.map((parament) => 
                        <p className={parament.par}>{parament.paragraf}</p>
                        )}
                
                </div>
        </div>
     );
}

export default Oneb;