import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
        
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/cart" element={<Cart/>} />
          
          {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage} */}

          {/* {!current ? 
            <Navigate to="/" />
           : 
            <Route exact path="/product/:id" element={<SingleItem/>}/>
          } */}
          <Route exact path="/product/:id" element={current?<SingleItem/>: <Navigate to="/" />}/>
        </Routes> 
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
 
  return{
    current : state.currentItem
  }
}

export default connect(mapStateToProps)(App)