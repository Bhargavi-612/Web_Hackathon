import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdownprofile from './DropDownProfile.js';
import * as FiIcons from 'react-icons/fi'
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showProfile = (prev) => setProfile(!profile);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
          <div className='navbar-item'>
            {/* Content for the first part */}
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className='navbar-item'>
            {/* Content for the second part */}
            <h1 className="navbar-title">Title</h1>
          </div>
         <div className={profile?'navbar-item active':'navbar-item'}>
            <ul onClick={showProfile}>
            <Link to='#'>
              <FiIcons.FiUser  className='profile-photo'/>
            </Link>
            {/* Content for the third part */}
            {/* Content for the right part */}
            </ul>
          </div>
        </div>
        {
            profile&&<Dropdownprofile />
        }
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;