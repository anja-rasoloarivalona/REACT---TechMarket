import React, { Component } from 'react';
import {ProductConsumer} from '../../../context';
import classes from './NavForm.css';
import ReactSVG from 'react-svg';
import glass from '../../../assets/icon/SVG/search.svg';

class NavForm extends Component {
  render() {
    return (

    <form className={classes.Form}
          style={{width: this.props.width}}>
            <ProductConsumer>
                {value => (
                    <input type="text"
                            name="searchedValue"
                            value={value.searchedValue}
                            onChange={(e) => value.searchHandler(e)}
                            className={classes.Input}
                            placeholder="Search"/>
                            
                )}

            </ProductConsumer>

            <ReactSVG src={glass} alt="Search Icon" className={classes.Icon}/>

    </form>
    )
  }
}

export default NavForm;



