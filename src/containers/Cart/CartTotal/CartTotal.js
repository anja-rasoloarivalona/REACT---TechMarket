import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CartTotal.css';

const cartTotal = () => {

    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
        return (
        <div className={classes.Total}>
            <div>
                subtotal : ${cartSubtotal}
            </div>
            <div>
                tax : ${cartTax}
            </div>
            <div>
                total : ${cartTotal}
            </div>
                <Link to='/'>
                    <button className={classes.Button} onClick={()=>clearCart()}>
                        Clear Cart
                    </button>
                </Link>

                
        </div>

        
  )
}

export default cartTotal;
