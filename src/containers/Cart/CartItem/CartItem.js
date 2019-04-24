import React from 'react';
import classes from './CartItem.css'


const cartItem = ({item, value}) => {
    const {id, model, brand, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

  return (
    <div className={classes.Item}>
        <div className={classes.ImgContainer}>
            <img className={classes.Img} src={img} alt="product" />
        </div>
        <div className={classes.Title}>
            <span>{model} - {brand} </span>
        </div>
        <div className={classes.Price}>
            <span>price: ${price}</span>
        </div>



        <div className={classes.Control}>
            <span>Qty: </span>
            <div className={classes.Count}>{count}</div>
            <button className={[classes.Button, classes.ButtonDec].join(' ')} onClick={() => decrement(id)}><span> - </span></button>
            <button className={[classes.Button, classes.ButtonInc].join(' ')} onClick={() => increment(id)}><span> + </span></button>
        </div>



        <div className={classes.Remove}>
            <button className={classes.RemoveButton} onClick={() => removeItem(id)}>Remove</button>
        </div>

        <div className={classes.Total}>
            Total: ${total}
        </div>

    </div>
  )
}

export default cartItem;
