import React from 'react';
import classes from './LayoutStore.css';

const layoutStore = (props) => {
  return (
    <div className={classes.Layout}>
        {props.children}
    </div>
  )
}

export default layoutStore
