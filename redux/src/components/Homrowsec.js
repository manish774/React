import {useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import "../css/home.css";

const homrowsec = (props) =>{
    console.log(props.name.msg,"prop")
return <>
        <div className="row light-white">
                <div className="col-lg-12 ">
                    <div className={`home-fc`} style={{transform: `rotate(${props.name.rotate}deg)`}}>
                        <p className="h-h1 backgroun-letter ">{props.name.msg}</p>
                    </div>
                </div>
        </div>
               
    </>
};

export default homrowsec;