import React from 'react'

const SignInUpModel = ({showModel, setUserLoggedIn,userNameRef}) => {
    if(!showModel) return null

    const getUserDetails = () => {
    setUserLoggedIn(true) 
    }
    return(
        <div className="model">
            <div className="model container">
            <label>Enter Your Name</label>
            <input ref={userNameRef} type="text"></input>
            <button onClick={getUserDetails}>Sign In</button>
            </div>
            
        </div>
    )
}

export default SignInUpModel