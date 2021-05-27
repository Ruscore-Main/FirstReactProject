import React from 'react';
import Clock from './Clock';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
const Header = props => {
    return (
    <header>
        <div className={classes.img}>
            <img src="https://st2.depositphotos.com/3096625/8799/v/600/depositphotos_87990570-stock-illustration-letter-r-logo-monogram.jpg" alt="logo" />
            <span>
                Rnet
            </span>
        </div>
        <span>
            { props.isAuth ? props.login :
            <NavLink to='/login'>
                Login
            </NavLink> }
        </span>
        <Clock />
    </header>
    );
}

export default Header;
