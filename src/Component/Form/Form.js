import React, {Component} from 'react';
import './reset.css';

export default class Form extends Component{
    constructor(){
        super();

        this.state={
            img: '',
            name: '',
            price : 0,
            defaultImg : 'http://via.placeholder.com/350x150'
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.handelCancelButton = this.handelCancelButton.bind(this);

    }

    handleInput(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleImageInput(e){
        this.setState({img: e.target.value});
    }

    handelCancelButton(){
        this.setState({img : '', name : '', price : 0})
    }

    render(){
        return (
            <div>
                <div>
                    <h3>Image URL:</h3>
                    <input value={this.state.img} onChange={(e)=> this.handleImageInput(e)}></input>
                </div>
                <div>
                    <h3>Product Name:</h3>
                    <input name='name' value={this.state.name} onChange={(e)=> this.handleInput(e)}></input>
                </div>
                <div>
                    <h3>Price:</h3>
                    <input name='price' value={this.state.price} onChange={(e)=> this.handleInput(e)}></input>
                </div>
                <div className='buttons'>
                    <button type='button' onClick={this.handelCancelButton}>Cancel</button>
                    <button type='button'>Add to Inventory</button>
                </div>
            </div>
        )
    }
}