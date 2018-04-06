import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };

    this.getAllInventory= this.getAllInventory.bind(this);
  }

  componentDidMount(){
    this.getAllInventory();
  }

  getAllInventory(){
    axios.get(`http://localhost:3005/api/inventory`).then((result) => {
      this.setState({products: result.data})
    }).catch((e) => console.log(e));
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
