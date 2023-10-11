import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import DisplayData from './components/DisplayData';
import ChangeColor from './components/ChangeColor';
import Movie from './components/Movie';
import FunctionComponent from './components/FunctionComponent';
import Kbc from './components/Kbc';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  
  <Header/>

  <Routes>

    <Route path='/' element={<Form/>} />
    <Route path='displayData' element={<DisplayData/>}/>
    <Route path='changeColor' element={<ChangeColor/>}/>
    <Route path='getMovie' element={<Movie/>}/>
    <Route path='functionComponent' element={<FunctionComponent/>}/>
    <Route path='kbc' element={<Kbc/>}/>
  </Routes>
<Footer/>  
  </BrowserRouter>
  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
