import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';

const navigation = () => {
  return (
        <nav className={classes.Nav}>
        
        <Link to='/'>
            <div className= {classes.Logo}>
                LOGO
            </div>
        </Link>

        <ul className={classes.NavList}>
            <li className={classes.NavItem}>
                <Link to="/" className={classes.NavLink}>
                    Store
                </Link>
            </li>
            <li className={classes.NavItem}>
                <Link to="/about" className={classes.NavLink}>
                    About us
                </Link>
            </li>
            <li className={classes.NavItem}>
                <Link to="/cart" className={classes.NavLink}>
                    Cart
                </Link>
            </li>
        
        </ul>


        </nav>
  )
}


export default navigation