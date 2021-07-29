import { faCalendarWeek, faCog, faSignOutAlt, faThLarge, faUserInjured, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () =>{
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    }
    return (
        <section className="sidebar-container">
            <div className="side-nav-bar">
                <h6><FontAwesomeIcon icon={faThLarge} /> Dashboard</h6><br />
                <Link to='/doctor/appointment'><FontAwesomeIcon icon={faCalendarWeek} /> Appointment</Link><br /><br />
                <Link to='/doctor/patients'><FontAwesomeIcon icon={faUserInjured} /> Patients</Link><br /><br />
                <Link to='/doctor/addDoctor'><FontAwesomeIcon icon={faUserMd} /> add Doctor</Link><br /><br />
                <Link to='/doctor/setting'><FontAwesomeIcon icon={faCog} /> Setting</Link><br /><br />
            </div>
            <div className='side-nav-bar mt-5 pt-5'>
                <Link onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</Link>
            </div>
        </section>
    );
};

export default Sidebar;