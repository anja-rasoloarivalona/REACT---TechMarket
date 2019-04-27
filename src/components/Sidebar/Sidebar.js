import React from 'react';
import classes from './Sidebar.css';
import {ProductConsumer} from '../../context';


const sidebar = () => {

    
  return (
    
            <section className={classes.Sidebar}>
                <h4 className={classes.Title}>Explore by Category</h4>
                
                <ProductConsumer>
                    {val => {
                    const tv = "tv";
                    return (
                        <ul className={classes.CategoryContainer}>
                            <li className={classes.Category}>Store</li>
                            <li className={classes.Category} onClick={(tv) => val.searchedCategoryHandler(tv)}>TV</li>
                            <li className={classes.Category} onClick={(Headphones) => val.searchedCategoryHandler(Headphones)}>Headphones</li>
                            <li className={classes.Category} onClick={(Computers) => val.searchedCategoryHandler(Computers)}>Computers</li>
                            <li className={classes.Category} onClick={(Smarthphones) => val.searchedCategoryHandler(Smarthphones)}>Smarthphones</li>
                        </ul>

                        )

                    }}
                    
                </ProductConsumer>
                
                
            </section>

  )
}

export default sidebar;