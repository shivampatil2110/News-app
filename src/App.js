import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route exact path='/' element={<News key="general" category="general"/>}/>
          <Route exact path='/Business' element={<News key="business" category="business"/>}/>
          <Route exact path='/Entertainment' element={ <News key="entertainment" category="entertainment"/>}/>
          <Route exact path='/Sports' element={<News key="sports" category="sports"/>}/>
          <Route exact path='/Health' element={<News key="health" category="health"/>}/>
        </Routes>

        </BrowserRouter> 
        
      </div>
    )
  }
}