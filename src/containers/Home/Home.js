import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import background from '../../assets/img/beats.jpg';
import classes from './Home.css';
import Button from '../../components/Buttons/Button';
import { ProductConsumer } from '../../context';
import Product from '../../components/Product/Product';
import Title from '../Products/UI/Title/Title';


export default class Home extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }

  

    render() {
        return (
            <React.Fragment>

                <ProductConsumer>
                        {val => {
                            const {searchedValue, products} = val;
                            let searchedProducts = [...products];
                            let tempProducts = [];

                            if (searchedValue !== "") {  
                                
                                   

                                    searchedProducts = searchedProducts.filter(item => {       
                                        return item.brand
                                            .toLowerCase()
                                            .search(searchedValue.toLowerCase()) !== -1;
                            })

                            if(searchedProducts.length > 0) {
                               
                                tempProducts =                              
                                    <React.Fragment>
                                            <Title title="Our products" />
                                            <section className={classes.Layout}>
                                                <div className={classes.Products}>
                                                    <section className={classes.List}>
                                                        {
                                                            searchedProducts.map(item => {
                                                                return <Product 
                                                                key={item.id}
                                                                product={item} />
                                                            })
                                                        }                   
                                                    </section>
                                                </div>
                                            </section>
                                    </React.Fragment>                                     
                            } else {
                                tempProducts = <section className={classes.Layout}>
                                                <div className={classes.Products}>
                                                   <div>Sorry no Product found</div>
                                                </div>
                                            </section>
                            }
        
                            
                            return tempProducts;

                            } else {

                                return (
                                <React.Fragment>
                                    <section className={classes.Layout}>
                                    <div className={classes.Home}
                                        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"}}>
                                        
                                        <div className={classes.HomeText}>
                                            <div>NEW ARRIVALS</div>
                                                <div>BEATS STUDIO</div>
                                                <p>
                                                Cum nos notissimus sane accitus consociatos quae foveis cum turmis nos agitabantur cerneret cogebatur has semper exhalaret foveis turmis occultis certamina bellicosus cum occultis emergentes sui subsidia sed nos abnuens.
                                                </p>
                                                <Button buttonValue='Discover'
                                                        path='/store/headphones'/>
                                        </div>                                                                         
                                    </div>
                                    <div className={classes.Latest}>
                                            <div className={classes.LatestTitle}>
                                            Latest products
                                            </div>
                                            <section className={classes.LatestList}>
                                                <ProductConsumer>
                                                    {val => {
                                                        const {products} = val;
                                                        let tempProducts = [];
                                                      

                                                        products.forEach(item => {
                                                            if(item.type === "smartphones") {
                                                            const singleItem = {...item};
                                                            tempProducts = [...tempProducts, singleItem]}
                                                        });



                                                       

                                                        let prod = tempProducts.slice(0, 3)

                                                        return prod.map(item => {
                                                            return <Product 
                                                                    key = {item.id}
                                                                    product={item}/>
                                                        })

                                                }}
                                            </ProductConsumer>
                                        </section>
                    
                                        <Link to='/store/smartphones' className={classes.LatestLink}>
                                            VIEW MORE
                                        </Link>                      
                                        </div>
                                    </section>
                                </React.Fragment>
                                )                              
                        }         
                    }}
                </ProductConsumer>              
        </React.Fragment>
        )
    }
}

