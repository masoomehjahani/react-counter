import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';

class ProductList extends React.Component {
// class component byself have props

renderProduct = () =>{
// object destructuring: in class or function component u can destructur this.props or props
const {onChange,onDecres,onDelete,onIncrement,products} = this.props;
    // conditional renderin
    if(products.length === 0)
    return <div>there is no product in cart</div>;

    return products.map( product =>{
        return  <Product
       //  title ={product.title}
       //   price ={product.price}
       //   quantity ={product.quantity}
       product = {product}
       key = {product.id}
       onDelete ={() => onDelete(product.id)}
       onIncrement ={() =>onIncrement(product.id)}
       onDecres = {() => onDecres(product.id)}
       //   chnage ha pishfarz(hata age nanevisi ) event pass midahand
       onChange = {(e) => onChange(e,product.id)}
          > discount is: </Product>;
          });
};

render() {
    return(
     <div>
           {/* conditional renderin (by ternery operator) */}
    {!this.props.products.length && <div>go to shopping</div>}
    {this.renderProduct()};
     </div>
    )
    }
}
 
export default ProductList;