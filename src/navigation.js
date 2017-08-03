import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class Main extends Component {
    render(){
        return(
            <div className="main-tripit-menu">
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-sm-4">
                            <Link to="/" className="tripit_logo">
                                <img src="https://assets.concur.com/tripit/logo-tripit.png" />
                            </Link>
                        </div>
                        <div className="col-sm-8 flush-xs">
                            <ul className="main-nav-items">   
                                <li className="sub-menu-parent">            
                                    <Link to="/" className="header-item">Home</Link>  
                                </li>
                                <li className="sub-menu-parent"> 
                                    <Link to="/games" className="header-item">Games</Link>           
                                </li>
                                <li className="sub-menu-parent">            
                                    <Link to="/about" className="header-item">About</Link>  
                                </li>
                                <li className="sub-menu-parent">            
                                    <Link to="/edumaterials" className="header-item">Educational Materials</Link>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;