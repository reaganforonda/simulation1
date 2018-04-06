import React, {Component} from 'react';
import './reset.css';

export default class Form extends Component{
    constructor(){
        super();

        this.state={
            img: '',
            name: '',
            price : 0
        }

        this.handleInput = this.handleInput.bind(this);
        this.displayImage = this.displayImage.bind(this);
    }

    handleInput(e){
        this.setState({[e.target.name] : e.target.value});
    }

    displayImage(e){
        this.setState({img : e.target.value})
        if(this.state.img === ''){
            
        }
    }




    render(){
        return (
            <div>
                <img src={this.displayImage()} alt='product-image'/>
                <div>
                    <h3>Image URL:</h3>
                    <input value={this.state.img} onChange={(e)=> this.handleInput(e)}></input>
                </div>
                <div>
                    <h3>Product Name:</h3>
                    <input name='name' value={this.state.name} onChange={(e)=> this.handleInput(e)}></input>
                </div>
                <div>
                    <h3>Price:</h3>
                    <input name='price' value={this.state.price} onChange={(e)=> this.handleInput(e)}></input>

                </div>
            </div>
        )
    }
}