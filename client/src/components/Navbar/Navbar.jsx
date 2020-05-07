import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="/" className="btn btn-outline-info">Home</Link> 
            <Link to="/Signup" className="btn btn-outline-info">Signup</Link> 
            <Link to="/Login" className="btn btn-outline-info">Login</Link> 
            <Link to="/Edit" className="btn btn-outline-info">Edit</Link>
            <a className="btn btn-outline-danger">Logout</a>
        </div>
    )
}
