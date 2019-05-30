import React, { Component } from 'react'
import classes from './SideDrawer.css';
import {Link} from 'react-router-dom';
import ReactSVG from 'react-svg';
import cartIcon from '../../../assets/icon/SVG/cart.svg';
import { ProductConsumer } from '../../../context';
import Form from '../NavForm/NavForm';


class SideDrawers extends Component {

    state = {
        listOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {listOpen: !prevState.listOpen}
        })
    }


    render() {

        let drawerClass = [classes.List];
        let spanTop = [classes.ButtonSpan];
        let spanMid= [classes.ButtonSpan];
        let spanBottom = [classes.ButtonSpan];

        if(this.state.listOpen) {
            drawerClass = [classes.List, classes.Open]
            spanTop = [classes.ButtonSpan, classes.SpanTop]
            spanMid = [classes.ButtonSpan, classes.SpanMid]
            spanBottom = [classes.ButtonSpan, classes.SpanBottom]
            
        }

        

        

        return (
            <section className={classes.SideDrawers}>

                <div className={classes.NavTop}>
                        <Link to="/" className={classes.Link}>
                            <div className={classes.LogoContainer}>
                                <div className={classes.LogoText}>
                                        <span>T</span>
                                        <span>ech</span>
                                </div>
                                <div className={classes.LogoText}>
                                        <span>M</span>
                                        <span>arket</span>
                                </div>
                            </div>       
                        </Link>

                        <ul className={classes.LinkList}>
                            <li className={classes.Item}>
                                <Link to="/store" className={classes.Link}>
                                    Store
                                </Link>
                            </li>
                            <li className={classes.Item}>
                                <Link to="/cart" className={classes.Link}>
                                    <ReactSVG src={cartIcon} className={classes.Icon}/> 
                                    Cart              
                                </Link>
                                <ProductConsumer>
                                    {value => {
                                        const {cartItemCount} = value;
                                        if(cartItemCount > 0) {
                                            return (
                                                <span className={classes.Badge}>{cartItemCount}</span> 
                                            )
                                        } else {
                                            return (<span></span>)
                                        }                      
                                    }}                    
                                </ProductConsumer>
                            </li>            
                        </ul>


                </div>

                <div className={classes.NavBot}>
                    <div className={classes.ButtonContainer}>
                            <div className={classes.Button} onClick={this.drawerToggleClickHandler}>
                                <div className={spanTop.join(' ')} />
                                <div className={spanMid.join(' ')}/>
                                <div className={spanBottom.join(' ')}/>
                            </div>
                    </div>

                    <Form width='50%'/>


                    <ul className={classes.List} className={drawerClass.join(' ')}>
                        <li onClick={this.drawerToggleClickHandler}>
                            <Link to="/store/headphones" className={classes.Link}>Headphones</Link>
                        </li>
                        <li onClick={this.drawerToggleClickHandler}>
                            <Link to="/store/computers" className={classes.Link}>Computers</Link>
                        </li>
                        <li onClick={this.drawerToggleClickHandler}>
                            <Link to="/store/tv" className={classes.Link}>TV</Link>
                        </li>
                        <li onClick={this.drawerToggleClickHandler}>
                            <Link to="/store/smartphones" className={classes.Link}>Smartphones</Link>
                        </li>
                    </ul>
                </div>

                    
                    

                    
                
  
        </section>
        )
    }
}



export default SideDrawers