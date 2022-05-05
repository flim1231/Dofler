import React from 'react';
import cl from './TwoBl.module.css'


function TwoBl() {
    return ( 
        <div className={cl.allBlock_TWO}>
            <div className={cl.b_box1}>
                <div className={cl.o1}> <h1  className={cl.h_2q}>think big.</h1></div>
                <div className={cl.o2}><h1  className={cl.h_3q}>think big.</h1></div>
                <div className={cl.o3}><h1  className={cl.h_4q}>think big.</h1></div>
            </div>
            <div className={cl.b_box2}>
                <div className={cl.o4}><h1  className={cl.h_2w}>start small.</h1></div>
                <div className={cl.o5}><h1  className={cl.h_3w}>start small.</h1></div>
                <div className={cl.o6}><h1  className={cl.h_4w}>start</h1></div>
                <div className={cl.o10}><h1  className={cl.h_5w}>small.</h1></div>
            </div>
            <div className={cl.b_box3}>
                <div className={cl.o7}><h1 className={cl.h_2e}>move smart.</h1></div>
                <div className={cl.o8}><h1 className={cl.h_3e}>move smart.</h1></div>
                <div className={cl.o9}> <h1 className={cl.h_4e}>move smart.</h1></div>
            </div>
        </div>
     );
}

export default TwoBl;