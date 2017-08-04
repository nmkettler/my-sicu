import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Main from './navigation';
import Home from './App';
import About from './components/about';
import Games from './components/games';
import EduMaterials from './components/edumaterials';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Main} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/games" component={Games}/>
            <Route exact path="/edumaterials" component={EduMaterials}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);
