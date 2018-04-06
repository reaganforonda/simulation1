import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard/>
      </div>
    );
  }
}

export default App;
