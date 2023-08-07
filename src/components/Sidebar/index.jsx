import React from 'react'
import './index.css'

// import icons
import HomeIcon from '../img/Icons/Sidebar/fi_home.png'
import TruckIcon from '../img/Icons/Sidebar/fi_truck.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  return (
    <div className='container-sidebar'>
    <div className="Sidebar">
        <div className="logobox">
        </div>
        <Link style={{ textDecoration: "none", width: "100%"}} to='/cart'>
        <div className="dashboard-section">
            <img src={HomeIcon} alt="home" />
            <p>Dashboard</p>
        </div>
        </Link>
        <Link style={{ textDecoration: "none", width: "100%"}} to='/dashboard'>
        <div className="dashboard-section">
            <img src={TruckIcon} alt="truck" />
            <p>Car</p>
        </div>
        </Link>
    </div>
    <div className="navbar-dashboard">
      <div className="left-side">
        <div className='logobox-navbar' />
        <FontAwesomeIcon className='icon-menu' icon={faBars} />
      </div>

      <div className="right-side">
        <div className="input-group">
            <input type="text" className="form-control search-db" aria-label="Text input with segmented dropdown button" />
            <button type="button" className="btn btn-outline-secondary">Search</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar