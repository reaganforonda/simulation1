import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            products : [],
            defaultImg : 'https://loremflickr.com/320/240/dog'
        }
    }





    render(){
        return (
            <div>
                {this.props.products.map(val => {
                    return (
                        <div key={val.id}>
                        <Product product={val}/> 
                        </div>                  
                    )   
                })}
            </div>  
        )
    }
}