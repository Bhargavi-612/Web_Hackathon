import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

export default function Dropdownprofile() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className='Dropdownprofile'>
      <div className="profile-items">
        <Link to="#" className='profile-val'><FaIcons.FaUsers /><span>Settings</span></Link>
        <Link to="#" className='profile-val'><FaIcons.FaCog /><span>Settings</span></Link>
        <Link to="#" className='profile-val' onClick={handleLogout}><FaIcons.FaSignOutAlt /><span>Logout</span></Link>
      </div>
    </div>
  )
}
