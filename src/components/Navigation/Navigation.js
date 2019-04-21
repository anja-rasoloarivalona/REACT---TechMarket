import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';

const navigation = () => {
  return (
        <nav className={classes.Nav}>
        
        <Link to='/' className={classes.Link}>
            <div className= {classes.Logo}>
                HIGH - TECH
            </div>
        </Link>

        <ul className={classes.List}>
            <li className={classes.Item}>
                <Link to="/" className={classes.Link}>
                    Store
                </Link>
            </li>
            <li className={classes.Item}>
                <Link to="/about" className={classes.Link}>
                    About us
                </Link>
            </li>
            <li className={classes.Item}>
                <Link to="/cart" className={classes.Link}>
                    Cart
                </Link>
            </li>
        
        </ul>


        </nav>
  )
}


export default navigation