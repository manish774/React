import {useState} from 'react';
import "../css/home.css";

const homerowone = (props) =>{
return <>
        <div className="row light-white">
                <div className="col-lg-5 ">
                    <div className={`home-fc `}>
                        <p className="h-h1 backgroun-letter ">O</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className=" home-sc">
                        <h1 className="backgroun-letter h-h1">BOLD</h1>
                    </div>
                </div>
            </div>
    </>
};


export default homerowone;