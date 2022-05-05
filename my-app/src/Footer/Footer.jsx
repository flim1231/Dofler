import React from 'react';
import cl from './Footer.module.css'


function Footer() {
    return ( 
        <div className={cl.allBlock_Footer}>
            <div className={cl.section_Footer}>
                <p>umów się na bezpłatną konsultację</p>
                <h1 className={cl.poop}>hello@leanspin.pl</h1>
                <h1 className={cl.poops}>+48 534 999 080</h1>
                <h6>Studio LEANSPIN, Gałczyńskiego 33<br/>52-214 Wrocław, Polska</h6>
                <span className={cl.facebook}/>
                <span className={cl.in}/>
            </div>
            <p className={cl.inf}>© 2021 Copyright LEANSPIN</p>
            <p className={cl.ip}>Polityka prywatności</p>
        </div>
     );
}

export default Footer;