import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';
import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';

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
                    <ReactSVG src={cartIcon} className={classes.Icon}/> 
                    Cart              
                </Link>
                <span className={classes.Badge}>1</span> 
            </li>
        
        </ul>


        </nav>
  )
}


export default navigation