import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignUp = () => {
    return(
        <div className='loginsignup'>
            <div className="loginsignup-containor">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='your Name' />
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span>Login here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing , i agree to use terms & private policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp