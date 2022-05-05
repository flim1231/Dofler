import React from 'react';
import cl from './ThreBlock.module.css';

function ThreBlock() {
    return ( 
        <div className={cl.allBlock}>
            <div className={cl.block_section_first}>
                <a href='/'><p className={cl.paragraf}>agile</p></a>
                <a href='/'><p className={cl.paragraf}>evidence</p></a>
                <a href='/'><p className={cl.paragraf}>empowerment</p></a>
                <a href='/'><p className={cl.paragraf}>innovation</p></a>
            </div>
            <div className={cl.block_section_two}>
                <h1>Czy zarządzasz w <br/> efektywny sposób?</h1>
                <p className={cl.paragraf222}>Wbuduj zwinność w DNA Twojej organizacji i<br/>osiągaj 2 razy więcej w 2 razy krótszym czasie,<br/>będąc gotowym na zmiany, które nadejdą.</p>
                <p className={cl.paragraf333}>Sprawdź szczegóły</p>
                <div className={cl.line_white}></div>
            </div>
            <div className={cl.block_section_thre}>
                <h1 className={cl.agile}>agile</h1>
                <h1 className={cl.evidence}>evidence</h1>
                <h1 className={cl.empowerment}>empowerment</h1>
            </div>
        </div>
     );
}

export default ThreBlock;