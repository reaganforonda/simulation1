import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedProduct: {}
    };

    this.getAllInventory = this.getAllInventory.bind(this);
    this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

  componentDidMount() {
    this.getAllInventory();
  }

  // Get all products in inventory
  getAllInventory() {
    axios
      .get(`http://localhost:3005/api/inventory`)
      .then(result => {
        this.setState({ products: result.data });
      })
      .catch(e => console.log(e));
  }


  // Get selected product from inventory by ID
  getSelectedProduct(id) {
    axios
      .get(`http://localhost:3005/api/inventory/${id}`)
      .then(result => {
        this.setState({ selectedProduct: result.data });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          getAllInventory={this.getAllInventory}
          selected={this.state.selectedProduct}
        />
        <Dashboard
          products={this.state.products}
          getAllInventory={this.getAllInventory}
          getSelectedProduct={this.getSelectedProduct}
        />
      </div>
    );
  }
}

export default App;
