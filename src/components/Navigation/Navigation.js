import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navigation.css';
import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';
import logo from '../../assets/img/logo.png';
import {ProductConsumer} from '../../context';
import NavForm from './NavForm/NavForm';

const navigation = () => {
  return (
        <nav className={classes.Nav}>
        
            <div className={classes.NavTop}>
        <Link to="/store" className={classes.Link}>
                    <img src={logo} alt="logo img" className= {classes.Logo}/>          
            </Link>

            <NavForm />
        
            <ul className={classes.List}>
                <li className={classes.Item}>
                    <Link to="/store" className={classes.Link}>
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
                                return (<span></span>)
                            }                      
                        }}                    
                    </ProductConsumer>
                </li>            
            </ul>
        </div>
           
            <div className={classes.NavBot}>
                <ul className={classes.CategoryContainer}>
                    <li>
                        <NavLink to="/store/headphones" className={classes.Link}>
                                            Headphones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store/computers" className={classes.Link}>
                                            Computers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store/tv" className={classes.Link}>
                                            TV
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store/smartphones" className={classes.Link}>
                                            Smartphones
                        </NavLink>
                    </li>                                  
                </ul> 
            </div>

        </nav>
  )
}


export default navigation