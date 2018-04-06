import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            products : [],
            defaultImg : 'https://loremflickr.com/320/240/dog'
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        axios.delete(`http://localhost:3005/api/inventory/${id}`).then((result)=> {
            this.props.getAllInventory;
        }).catch((e) => console.log(e));
    }

    render(){
        return (
            <div>
                {this.props.products.map(val => {
                    return (
                        <div key={val.id}>
                        <Product product={val} delete={this.deleteProduct}/> 
                        </div>                  
                    )   
                })}
            </div>  
        )
    }
}