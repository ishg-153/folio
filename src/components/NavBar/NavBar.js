import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom/dist';

function NavBar(){
    return <div className={styles.container}>

        <ul>
            <li>
                <NavLink className={styles.navLink} to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={styles.navLink} to="/resume-builder">
                    Start Building
                </NavLink>
            </li>
        </ul>
        
    </div>;
}

export default NavBar;