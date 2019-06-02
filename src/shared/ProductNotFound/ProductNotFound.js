import React from 'react';
import classes from './ProductNotFound.css';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

const productNotFound = () => {
    return (
        <div className={classes.Container}>
            <ProductConsumer>
                {val => {

                        const { searchedValue} = val;

                        return (
                            <div className={classes.Text}>           

                                    <div>Sorry, we couldn't find any content for "{searchedValue}"</div>
                                    <Link to='/store' className={classes.Link}>
                                            Store
                                    </Link>

                            </div>
                        )
                }}
            </ProductConsumer>
        </div>
    )
}

export default productNotFound;
