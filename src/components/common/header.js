import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import SignInUpModel from 'components/common/header/signInUpModel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons' 

const Header = () =>{
    const menuItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Profile',
            path: '/profile'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Blog',
            path: '/blog'
        },
        {
            label: 'Image Gallery',
            path: '/images'
        },
        {
            label: 'Contact Us',
            path: '/contact'
        }
    ]
    const [showModel, setShowModel] = useState(false)
    const [userLoggedIn,setUserLoggedIn] = useState(false)

    const userNameRef = useRef(null)

    const renderMenuItems = (menuItem,index) => {
    return<a href={menuItem.path} className="header-root menuItem" key={index}>{menuItem.label}</a>
    }
    const toggleLoginModel = () => {
        setShowModel(!showModel)
    }
    return (
    <div className="header-root">
        <div className="header-root top-nav-bar">
            <button className="button header-root__top-button">Subscribe</button>
            <h2 className="page-title"> My react blog site </h2>
            <FontAwesomeIcon icon={faSearch} />
            {userLoggedIn ? (
                <div>welcome , {userNameRef.current.value}</div>
            ) : (
                <button className="button header-root__top-button outline" onClick={toggleLoginModel}>SignIn / SignUp</button>
            )}
            
        </div>
        <div className="header-root menu-nav-bar">
            {menuItems.map(renderMenuItems)}
        </div>
        <SignInUpModel showModel= {showModel} setUserLoggedIn = {setUserLoggedIn}
        userNameRef = {userNameRef}
        />
    </div>
    )
    
}



// { typeof(slogan) !== "undefined" ? 
//         <h3>{slogan}</h3>
//         :
//         <h3>It is Empty</h3>}

/* { typeof(slogan) !== "undefined" ? (
    <h3>It is Empty {slogan}</h3>
):
<h3>It is not Empty {slogan}</h3> 
} */

Header.protoTypes = {
    slogan: PropTypes.string,
    title: PropTypes.string //.isrequired
}

export default Header