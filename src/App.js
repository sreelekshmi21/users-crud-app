import React,{useState} from 'react';
import {Route,Routes,Link} from 'react-router-dom';
import Main  from './components/Main';
import Navbar from './components/Navbar';
import './menu.css'
import ProductList from './components/ProductList';

const App = () =>{

  return (
    <>    
        <Navbar/>       
        <div className="container" style={{marginTop:60}}>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/products' element={<ProductList />} />
          </Routes>   
        </div> 
 </>
  );    
}
export default App
