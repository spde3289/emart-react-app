import React, { Component } from 'react';
import Toc from "./conponents/Toc"
import Subject from './conponents/Subject'
import Content from './conponents/Content'
import './App.css';


class App extends Component {
  render() {
    return ( 
      <div className ="App">
      <Subject title="web" sub="world wide web!"></Subject>
      <Toc></Toc>
      <Content title="HTML" desc="HTML is hyperText Markup Languang"></Content>
      </div>
    );
  };
};

export default App;