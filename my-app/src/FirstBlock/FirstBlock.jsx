import React from 'react';
import cl from './FirstBlock.module.css'

function FirstBlock() {
    return (
        <div className={cl.allBlock}>
            <div className={cl.header}>
                <div className={cl.header__box1}>
                    <a href='/'><span className={cl.Logo}></span></a>
                </div>
                <div className={cl.header_section}>
                    <a className={cl.loop} href='/'><h2 className={cl.header_item + ' ' + cl.excl}>KNOW-HOW</h2></a>
                    <a href='/'><h2 className={cl.header_item + ' ' + cl.heaader_item1}>O NAS</h2></a>
                    <a href='/'><h2 className={cl.header_item}>BLOG</h2></a>
                    <a href='/'><h2 className={cl.header_item + ' ' + cl.header_item_last}>KONTAKT</h2></a>
                </div>
                <div className={cl.box_txt}>
                    <span className={cl.boolo} />
                    <h1 className={cl.txt_1 + ' ' + cl.txt_0}>[re]designing</h1>
                    <h1 className={cl.txt_2 + ' ' + cl.txt_0}>your business</h1>
                </div>
                <div className={cl.mini_text}>
                    <h5>Pomagamy rozwijać progresywne firmy, zespoły <br/> i kompetencje w coraz szybciej zmieniającym się świecie.</h5>
                </div>
                <div className={cl.mini_text2}>
                    <h5>Poznajmy się!</h5>
                    <h6>Umów się na bezpłatną konsultację</h6>
                </div>
            </div>

        </div>
    );
}

export default FirstBlock;