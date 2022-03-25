import React, { Component } from "react";
import { HousesList } from "./Component/HousesList";
import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1>House List</h1>
        </div>
        <div className="container mt-3">
          <div className="row mb-3">
            <div className="col">
              <HousesList />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
