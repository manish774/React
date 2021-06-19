import {React} from 'react';
import {buyCakes} from "../redux/index";
import {connect} from "react-redux";
import Heder from "./heder";
import "../css/home.css";
import Homerowone from "./homerowone"
import Homrowsec from "./Homrowsec";
import MakeInputs from "./makeInput";
import Login from "./Login";
import "../css/makeinput.css";

function CakeContainer(props){
    return (
        <div className="container-fluid">
            <Heder/>
            <Homerowone/>
            <Homrowsec name={{msg:"Powerful",rotate:4}} />
            <Homrowsec name={{msg:"Secure",rotate:-4}} />
            <Homrowsec name={{msg:"Easy ",rotate:10}} />
            <Login/>
            {/* <h2 className="text-glow">No Of Cakes= {props.noOfCakes}</h2>
            <button onClick={props.buyCakes} className="text-glow">Buy Cake</button> */}
        </div>
    )
};
const mapStateToProps = (state) =>{
    console.log(buyCakes)
    return{
        noOfCakes:state.noOfCakes
    }
};

const mapDispatchToProps = (dispatch) =>{
    console.log(dispatch)
    return{
        buyCakes: () => {dispatch({type:"BUY_CAKES"})}
    }
};




export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);