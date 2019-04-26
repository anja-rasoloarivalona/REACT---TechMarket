import React from 'react';
import classes from './Sidebar.css';
import {Link} from 'react-router-dom';

const sidebar = () => {
  return (
    
            <nav className={classes.Sidebar}>
                <Link to='/' className={classes.Link}>Headphones</Link>
                <Link to='/' className={classes.Link}>Computers</Link>
                <Link to='/' className={classes.Link}>TV</Link>
                <Link to='/' className={classes.Link}>Smartphones</Link>
            </nav>

  )
}

export default sidebar;