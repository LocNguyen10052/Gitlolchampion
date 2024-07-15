import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Search from './Basics/Search';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Monster from './Component/CardList/Monster';
import UserSearch from './Component/test';
import Header from './Component/Header/Header';
import LOLMenu from './Component/LOLCard/LOLMenu/LOLMenu';
import ChampionDetail from './Component/LOLCard/LOLDetail/ChampionDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header></Header>
    <Monster></Monster>
    <UserSearch></UserSearch> */}
    {/* <LOLMenu></LOLMenu> */}
    <ChampionDetail></ChampionDetail>
    <Router>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
