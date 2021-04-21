import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-light bg-light nav-container">
        <div className="container-fluid nav-div">
        <a className="navbar-brand">Funny Learn</a>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </nav> 
        
        </>
    )
}

export default Navbar
