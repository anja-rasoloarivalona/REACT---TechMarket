import React from 'react';
import classes from './Title.css';

 const title = (props) => {
  return (
    <React.Fragment>
      <h1 className={classes.Title}>{props.title}</h1>
    </React.Fragment>
  )
}


export default title;