import React, { Component } from 'react'
import { ProgressBar,Spinner } from 'react-bootstrap';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            isSubmitClicked : false
        }
    }
    
    progressStart = seconds =>{
        const progressBar = document.getElementById("progressBar");
        let timer = 0;
        let chunk = 100/seconds;
        let progress = 0;
        let reduceTimerCount = seconds;
        let progressVar = setInterval(()=>{
            timer++;
            reduceTimerCount--;
            progress += chunk;
            console.log(progress);
            this.setState({
                isSubmitClicked: true
            })
            var pgb = document.querySelector(".progress-bar");
            pgb.style.width = `${progress}%`;
            document.getElementById("timerCount").innerText = reduceTimerCount;
            pgb.style.transition = "width 1s ease-in-out;";
            if(timer===seconds){
                clearInterval(progressVar);
                pgb.classList.remove("progress-bar-animated");
                this.setState({
                    isSubmitClicked: false
                })
            }
        },1000)
    }
    render() {
        const isClicked = this.state.isSubmitClicked;
        return (
            <div>
                <h1>Login</h1>
                <button  id="submitButton" value="Submit" className="btn btn-success " onClick={() => this.progressStart(5)}>{!isClicked?("Submit"):(<Spinner animation="border" size="sm" />)}</button>
                <ProgressBar id="progressBar" animated now={0} className="progress-bar-success" />
                <h1 id="timerCount"></h1>
            </div>
        )
    }
}
export default Login;