import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink exact to="/profile" className={classes.item} activeClassName={classes.active}><li>Profile</li></ NavLink>
                <NavLink exact to="/dialogs" className={classes.item} activeClassName={classes.active}><li>Messages</li></ NavLink>
                <NavLink exact to="/users" className={classes.item} activeClassName={classes.active}><li>Users</li></ NavLink>
                <NavLink to="#" className={classes.item}><li>Music</li></ NavLink>
                <NavLink to="#" className={classes.item}><li>News</li></ NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;