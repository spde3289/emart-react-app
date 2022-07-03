import React, { Component } from 'react';
import Toc from "./conponents/Toc"
import Subject from './conponents/Subject'
import Content from './conponents/Content'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'},
      ]
    }
  }
  render() {
    return ( 
      <div className ="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
      </Subject>
      <Toc data={this.state.content}></Toc>
      <Content title="HTML" desc="HTML is hyperText Markup Languang"></Content>
      </div>
    );
  };
};

export default App;