import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';
import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';
import logo from '../../assets/img/logo.png';
import {ProductConsumer} from '../../context';

const navigation = () => {
  return (
        <nav className={classes.Nav}>
        
        <Link to='/' className={classes.Link}>
                <img src={logo} alt="logo img" className= {classes.Logo}/>          
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
                <ProductConsumer>
                    {value => {
                        const {cartItemCount} = value;
                        if(cartItemCount > 0) {
                            return (
                                <span className={classes.Badge}>{cartItemCount}</span> 
                            )
                        } else {
                            return (
                                <span></span>
                            )
                        }

                        
                    }}
                    
                </ProductConsumer>
            </li>
        
        </ul>


        </nav>
  )
}


export default navigation