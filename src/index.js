import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TitlesSimulator from "./roots/TitlesSimulator";
import ButtonSimulator from "./roots/ButtonSimulator";
import InputSimulator from "./roots/InputSimulator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='TitleSimulator' element={<TitlesSimulator />} />
            <Route path='ButtonSimulator' element={<ButtonSimulator />} />
            <Route path='InputSimulator' element={<InputSimulator />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
