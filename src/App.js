import './App.css';
import {useState} from 'react';

function Header(props){
  return (
  <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangeMode()
      }}>{props.title}</a></h1>
  </header>
  );
};

function Nav(props){
  const lis = []
  for(let i =0;i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'./read/'+t.id} onClick={e=>{
      e.preventDefault();
      props.onChangeMode(Number(e.target.id))
    }}>{t.title}</a></li>)
  }
  return (
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>  
  );
};

function Article(props) {
  return (
  <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  );
};

function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'}
  ];
  let content = null;
  if(mode === 'welcome'){
    content = <Article title="welcome" body="hello, Web"></Article>;
  }else if(mode === "read"){
    let title, body = null;
    for(let i =0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    };
    content = <Article title={title} body={body}></Article>;
  };
  return (
    <div>
      <Header title="REACT" onChangeMode={function(){
        setMode('welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={_id=>{
        setMode('read');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
};

export default App;