import React from 'react';
import './Twob.css'
import Map from './Map.jsx'

function Twob() {
    return ( 
        <div className='allBlockTWO'>
            <div className='block_section'>
                <div className='boxFirst'><h1>Prawdziwe <br/> historie</h1></div>
                <Map />
                <div className='white_box1'>
                    <p className='white_box1P'>Zapraszamy do lektury historii klientów, partnerów i przyjaciół, z którymi <br/> mamy przyjemność wędrować drogą rozwoju i przedsiębiorczości.</p>
                    <p className='white_box1P2'>Każda historia jest inna, bo stoją za nimi unikalne organizacje <br/> tworzone przez ludzi obdarzonych wyjątkowymi pomysłami, talentami i <br/> doświadczeniami.</p>
                </div>
                <div className='white_box2'>
                    <p className='white_box2P'>“Jesteśmy złączeni dzięki historiom” – Arystoteles, 384-322 p.n.e.</p>
                </div>
            </div> 
        </div>
     );
}

export default Twob;