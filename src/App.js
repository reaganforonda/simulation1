import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          name: "product",
          price: 99,
          img: "http://via.placeholder.com/350x150"
        },

        {
          id: 2,
          name: "product",
          price: 99,
          img: "http://via.placeholder.com/350x150"
        },

        {
          id: 3,
          name: "product",
          price: 99,
          img: "http://via.placeholder.com/350x150"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard products={this.state.products} />
      </div>
    );
  }
}

export default App;
