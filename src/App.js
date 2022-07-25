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

function Create(props){
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={e => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value='Create'></input></p>
      </form>
    </article>
  );
};

function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [nextId, setnextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'}
  ]);
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
  }else if(mode === 'create'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('read');
      setId(nextId);
      setnextId(nextId+1);
    }}></Create>
  }
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
      <a href ='/create' onClick={e=>{
        e.preventDefault();
        setMode('create');
      }}>Create</a>
    </div>
  );
};

export default App;