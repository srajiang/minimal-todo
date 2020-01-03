import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout}) => {

    const display = currentUser? (
        <header className="nav-bar">
            <div>Hi, { currentUser.username }</div>
            <button onClick={logout}></button>
        </header>
    ) : (
        <header className="nav-bar">
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </header>
    )

    return (
        <div>
            {display}
        </div>
    )

}

export default Greeting;