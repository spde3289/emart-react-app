//import React, { Component } from 'react';
//import {useState} from 'react';
import Header from './components/Header';
import Top from './components/Top';
import Main from './components/Main';
import Footer from './components/Footer';

function ATag(){
  window.addEventListener('load', ()=>{
    const a = document.getElementsByTagName('a'); 
      for(let i = 0;i < a.length; i++){
        a[i].addEventListener('click', e =>{
            if(a[i].pathname === '/'){
                e.preventDefault();
            };
        });
    };
  });
}

function App(){
  ATag()
  return(
    <div>
      <Header></Header>
      <Top></Top>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App;