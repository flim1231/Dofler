import React from 'react';
import cl from './ThreBl.module.css'


function ThreBl() {
    return ( 
        <div className={cl.allBlock_THRE}>
            <div className={cl.section_THRE}>
                <div className={cl.image_box_THRE}>
                    <h1>Pomagamy rozwijać<br/> biznesy gotowe na nowe<br/>czasy</h1>
                    <span className={cl.image_THRE1}/>
                    </div>

                    <div className={cl.image_box_THRE2}>
                        <span className={cl.image_THRE2}/>
                        <p>Wierzymy, że organizacje mogą być bardziej skuteczne, a<br/>pracujący w nich ludzie żyć szczęśliwie, budować wartość i<br/> zmieniać świat na lepsze.</p>
    
                    </div>
                    <div className={cl.image_box_THRE_1}>
                            <span className={cl.img_THRE1}/>
                            <p className={cl.p_1}>Przemysław Skrzek</p>
                            <span className={cl.img_THRE2}/>
                            <p className={cl.p_2}>Maciej Gawlik</p>
                        </div>
            </div>
        </div>
     );
}

export default ThreBl;