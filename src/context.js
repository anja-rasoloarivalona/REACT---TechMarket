import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';



const ProductContext = React.createContext();


 class ProductProvider extends Component {

    state= {
         products: [],
         productsDetail: detailProduct,
         cart: [],
         cartSubtotal: 0,
         cartTax: 0,
         cartTotal: 0,
         cartItemCount: 0,
         searchedValue: ''
    };

    componentDidMount() {
        this.productsListHandler();
        console.log('did mount')
    
    }

    productsListHandler = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return {products:tempProducts}
        });
      
    };


    getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
    }

    handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
        return {productsDetail: product}
      });
    }

    addToCart = id => {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;

      this.setState( () => {
        return {products: tempProducts, cart:[...this.state.cart, product]}
      },
      
      () => {
        this.addTotals();
        this.cartItemCounter();
      }
      );
    }

    cartItemCounter = () => {
      let count = 0;
      this.state.cart.map( item => count += item.count)

      this.setState(() => {
        return {
          cartItemCount: count
        }
      })
    }

    addTotals = () => {
      let tempSubTotal = 0;
      this.state.cart.map(item => (tempSubTotal += item.total));

      let subTotal = parseFloat(tempSubTotal.toFixed(2));

      const tempTax = subTotal * .15;
      const tax = parseFloat(tempTax.toFixed(2));

      const totalTemp = subTotal + tax;
      const total = totalTemp.toFixed(2);

      this.setState(() => {
        return {
          cartSubtotal: subTotal,
          cartTax: tax,
          cartTotal: total
        }
      })    
    }



    increment = id => {
      let newCart = [...this.state.cart];
      const selectedProduct = newCart.find(item => item.id === id);
      const index = newCart.indexOf(selectedProduct);
      const product = newCart[index];

      product.count = product.count + 1;
      product.total = product.count * product.price;

      this.setState( () => {return { cart: [...newCart]};
         },  
      () => { this.addTotals();
              this.cartItemCounter(); }
      )
    }


    decrement = id => {
      let newCart = [...this.state.cart];
      const selectedProduct = newCart.find(item => item.id === id);
      const index = newCart.indexOf(selectedProduct);
      const product = newCart[index];

      product.count = product.count - 1;
      product.total = product.count * product.price;

      if(product.count === 0) {
        this.removeItem(id)
      }

      else {
        product.total = product.count * product.price;
        this.setState(() => {return{cart:[...newCart]};
      }, () => {this.addTotals();
                this.cartItemCounter();})
      }
    };


    removeItem = id => {
      let tempProducts = [...this.state.products];
      let tempCart = [...this.state.cart];
      tempCart = tempCart.filter(item => item.id !==id);

      const index = tempProducts.indexOf(this.getItem(id));
      let removedProduct = tempProducts[index];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;

      this.setState( () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        }
      }, () => {
        this.addTotals();  
        this.cartItemCounter();    })
    }


    clearCart = () => {
      this.setState( () => {
        return { cart: []};
      },  () => {
          this.productsListHandler();
          this.addTotals();
          this.cartItemCounter();
      })
    }


    searchHandler = (event) => {

      const search = event.target.value;
      this.setState(
      
         { searchedValue: search});
    }

      
    

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        searchHandler: this.searchHandler,
        searchedCategoryHandler: this.searchedCategoryHandler

        
      }}>

      {this.props.children}

      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
