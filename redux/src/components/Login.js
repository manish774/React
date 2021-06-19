import { Component } from "react";
import Makeinput from "./makeInput";
import "../css/Login.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap"
class Login extends Component {
    constructor(props) {
        super();
        this.state ={
            email:"",
            password:""
        }

    }
    inputHandler = (e) => {
       this.setState({[e.target.name] : e.target.value},()=>{
           console.log(e.target.value)
       })
    }
    render() {
        return <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="container-login">
                        <Card style={{ width: '18rem' }} className="bg-dark">
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Col sm={12}>
                                                <Form.Control type="email" name="email" placeholder="Email" onKeyUp={this.inputHandler} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalPassword">
                                            <Col sm={12}>
                                                <Form.Control type="password" name="password" placeholder="Password" onKeyUp={this.inputHandler} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 12, }}>
                                                <Button type="submit">Sign in</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    }
}

export default Login;