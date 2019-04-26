import React, { Component } from 'react';
import {ProductConsumer} from '../../../context';

class NavForm extends Component {
  render() {
    return (
    <ProductConsumer>
        {value => (
            <input type="text"
                    name="searchedValue"
                    value={value.searchedValue}
                    onChange={(e) => value.searchHandler(e)} />
        )}
      
    </ProductConsumer>
    )
  }
}

export default NavForm;



