import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-custom navbar-dark navbar-expand-lg'>
            <div className="container">
                <Link to='/' className='navbar-brand'>ExerTracker</Link>
                <div className="colapse navbar-colapse ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/create' className='nav-link'>Create Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
