import React, {Component} from 'react';
import Toc from "./conponents/Toc";
import Subject from './conponents/Subject';
import CreateContent from './conponents/CreateContent';
import ReadContent from './conponents/ReadContent';
import Control from './conponents/control';
import UpdateContent from './conponents/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web'},
      Welcome:{title:'welcome', desc:'Hello, React!!'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'}
      ]
    };
  };
  getReadContent(){
    let i = 0;
    while(i < this.state.content.length){
      let data = this.state.content[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      };
      i++;
    };
  };
  getContent(){
    let _title, _desc, _article = null;
    
    if(this.state.mode === 'welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'Create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id += 1;
        
        _content = this.state.content.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          content: _content,
          mode:'read', 
          selected_content_id : this.max_content_id
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>;
    }else if(this.state.mode === 'Update'){
      let _content = this.getReadContent()
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _content = Array.from(this.state.content);
          var i = 0;
          while(i < _content.length){
            if(_content[i].id === _id) {
              _content[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            content:_content,
            mode:'read'
          });
        }.bind(this)}></UpdateContent>
    };
    return _article;
  };

  render() {
    console.log('App')
    return ( 
      <div className ="App">
        {<Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function() {
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>}

        <Toc 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.content}>
        </Toc>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            console.log(this.state.content)
            if(window.confirm()){
              var _content = Array.from(this.state.content);
              var i = 0;
              while(i< this.state.content.length){
                if(_content[i].id===this.state.selected_content_id){
                  _content.splice(i,1);
                  break;
                };
                i++;
              };
              this.setState({
                mode:'welcome', 
                content:_content
              })
            };
          }else{
            this.setState({
            mode:_mode
          });
        };
        }.bind(this)}></Control>

          {this.getContent()}

      </div>
    );
  };
};

export default App;