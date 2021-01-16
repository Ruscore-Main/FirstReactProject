import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className={classes.item + ' ' + classes.active}>Profile</li>
                <li className={classes.item}>Messages</li>
                <li className={classes.item}>News</li>
                <li className={classes.item}>Music</li>
            </ul>
        </nav>
    );
}

export default Navbar;