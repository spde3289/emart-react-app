import React, { Component } from 'react';
import Toc from "./conponents/Toc";
import Subject from './conponents/Subject';
import Content from './conponents/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web'},
      Welcome:{title:'welcome', desc:'Hello, React!!'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'},
      ]
    };

  };

  render() {
    let _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if(this.state.mode === 'read'){
      _title =this.state.content[0].title;
      _desc = this.state.content[0].desc;

    };

    return ( 
      <div className ="App">
      {<Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          alert('hihihi');
          this.setState({mode:'welcome'})
        }.bind(this)}
        >
        
      </Subject>}
      <Toc data={this.state.content}></Toc>
      <Content title= {_title} desc= {_desc}></Content>
      </div>
    );
  };
};

export default App;