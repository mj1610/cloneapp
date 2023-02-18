import React, {useRef, useContext} from 'react';
import "./login.css";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";
const Login = () => {

    const email = useRef();
    const password = useRef();
    const {isFetching, dispatch} = useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch)
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialSite</h3>
                    <span className="loginDesc">Connect with friend and the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input className="loginInput" type="text" placeholder="Email" required ref={email}/>
                        <input className="loginInput" type="password" placeholder="Password" minLength="6" required ref={password}/>
                        <button className="loginButton" disabled={isFetching}> {isFetching?<CircularProgress size="20px" color="white" />:"Log in"}</button>
                        <span className="loginForgot">Forgot your password</span>
                        <button className="loginRegisterButton">{isFetching?<CircularProgress size="20px" color="white" />:"Create a new account"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default Login;