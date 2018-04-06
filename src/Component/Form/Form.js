import React, { Component } from "react";
import "./reset.css";
import axios from "axios";
import Button from '../Button/Button';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: "",
      prodName: "",
      price: 0,
      products: [],
      id: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
    this.handelCancelButton = this.handelCancelButton.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidUpdate(){
    //TODO: 
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageInput(e) {
    this.setState({ img: e.target.value });
  }

  handelCancelButton() {
    this.setState({ img: "", prodName: "", price: 0 });
  }

  addProduct() {
    let product = {
      price: this.state.price,
      img: this.state.img,
      name: this.state.prodName
    };
    axios
      .post(`http://localhost:3005/api/product`, product)
      .then(result => {
        this.setState({ products: result.data });
      })
      .catch(e => console.log(e));

    this.props.getAllInventory();
    this.handelCancelButton();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Image URL:</h3>
          <input
            value={this.state.img}
            onChange={e => this.handleImageInput(e)}
          />
        </div>
        <div>
          <h3>Product Name:</h3>
          <input
            name="prodName"
            value={this.state.prodName}
            onChange={e => this.handleInput(e)}
          />
        </div>
        <div>
          <h3>Price:</h3>
          <input
            name="price"
            value={this.state.price}
            onChange={e => this.handleInput(e)}
          />
        </div>
        <div className="buttons">
          <Button onclick={this.handelCancelButton} title='Cancel'></Button>
          <Button onclick={this.addProduct} title='Add to Inventory'></Button>
        </div>
      </div>
    );
  }
}
