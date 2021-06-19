import React from 'react';
import {buyCakes} from "../redux/index";
import {connect} from "react-redux";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function CakeContainer(props){
    console.log(props)
    return (
        <div>   
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-header-container">
            <Navbar.Brand href="#home" className="text-glow">Apprailsalo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">{props.noOfCakess}</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log(buyCakes)
    return{
        noOfCakess:state.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) =>{
    console.log(dispatch)
    return{
       addCakes: () => {dispatch({type:"ADD_CAKES"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);