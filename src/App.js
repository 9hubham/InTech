import './App.css';
import React, {Component} from 'react'
import { NavBar } from './components/navbar';
import News from './components/news';

export default class App extends Component{
  c= "John";
  render(){
    return(
      <>
      <div>
        <NavBar/>
        <News/>
      </div>
      </>
    )
  }
}