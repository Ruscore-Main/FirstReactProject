import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/profile" className={classes.item} activeClassName={classes.active}><li>Profile</li></ NavLink>
                <NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}><li>Messages</li></ NavLink>
                <NavLink to="#" className={classes.item}><li>Music</li></ NavLink>
                <NavLink to="#" className={classes.item}><li>News</li></ NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;