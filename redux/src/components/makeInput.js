import React from 'react';
import parse from 'html-react-parser';

const makeInputs = (props) =>{
    debugger;
    console.log(props,"props");
     var html="";
    for(let i =0;i<props.length;i++){
        let attribs = "";
        for(let j=0;j<Object.keys(props[i]).length;j++){
            attribs+=`${Object.keys(props[i])[j]} = "${Object.values(props[i])[j]}" `;
        }
        html +=`<input ${attribs}/> <br>`;
    }
   return  <div>{ (html) }</div>;
}

export default makeInputs;