import React from 'react';
import classes from './Sidebar.css';
import {Link} from 'react-router-dom';


const sidebar = () => {

    
  return (
    
            <section className={classes.Sidebar}>
                <h4 className={classes.Title}>Categories</h4>
                        <ul className={classes.CategoryContainer}>

                            <li>
                                <Link to="/store" className={classes.Link}>
                                        Store
                                </Link>
                            </li>
                            <li>
                                <Link to="/store/headphones" className={classes.Link}>
                                        Headphones
                                </Link>
                            </li>
                            <li>
                                <Link to="/store/computers" className={classes.Link}>
                                        Computers
                                </Link>
                            </li>
                            <li>
                                <Link to="/store/tv" className={classes.Link}>
                                        TV
                                </Link>
                            </li>
                            <li>
                                <Link to="/store/smartphones" className={classes.Link}>
                                        Smartphones
                                </Link>
                            </li>
                      
         
                        </ul>     
            </section>

  )
}

export default sidebar;