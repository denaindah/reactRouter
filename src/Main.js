import React, { Component } from "react";
import {
    Reacto,
    NavLink,
    HashRouter, 
    Route
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Produk from "./Produk";
import './Main.css'

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <ul className="navbar">
                        <li><NavLink to="/produk">Produk</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/">Masuk</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route className="route" exact path="/" component={Home}/>
                    <Route className="/produk" component={Produk}/>
                    <Route path="/about" component={About}/>
                </div>
            </HashRouter>
        );
    }
}

export default Main;