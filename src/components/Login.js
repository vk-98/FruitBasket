import React, { Component } from 'react'
import {Redirect} from "react-router-dom";

export class Login extends Component {
    state = {
        username: "",
        password: "",
        message: "",
        loggedin: false,
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        
        const {username, password} = this.state; 
        if(username==="Admin" && password==="Admin"){
            this.setState({
                ...this.state,
                loggedin: true
            })
        }else if(username==="MyName" && password==="test"){
            this.setState({
                ...this.state,
                loggedin: true
            })
        }
        else {
                this.setState({
                ...this.state, 
                message: "Please Enter Correct Username and Password",
            })
        }  
    }

    onChangeHandler = (e) =>{
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    render() {
        if(this.state.loggedin === true){
            return <Redirect to="/dashboard/"/>
        }
        return (
            
            <div className="row ">
            
            <div className="col s6 offset-s3 center">
                <h1>Login</h1>

                <p> {this.state.message} </p>

                <label for="username">Username</label>
                <input type="text" name="username" id="username" onChange={this.onChangeHandler}/>

                <label for="password">Password</label>
                <input type="password" name="password" id="password" onChange={this.onChangeHandler}/>

                <input type="submit" className="btn" onClick={this.onSubmitHandler}/>
                
            </div>
            </div>
        )
    }
}

export default Login
