import React from 'react';
import classes from './Button.css';
import { Link } from 'react-router-dom';

const button = (props) => {
  return (
    <Link to={props.path} className={classes.Button}>
        {props.buttonValue}
    </Link>
  )
}

export default button;
