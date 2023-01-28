// import React,{useState} from 'react';
// import {Route,Routes,Link} from 'react-router-dom';
// import Main  from './components/Main';
// import Navbar from './components/Navbar';
// import './menu.css'
// import ProductList from './components/ProductList';

// const App = () =>{

//   return (
//     <>
//         <Navbar/>
//         <div className="container" style={{marginTop:60}}>
//           <Routes>
//             <Route exact path='/' element={<Main />} />
//             <Route path='/products' element={<ProductList />} />
//           </Routes>
//         </div>
//  </>
//   );
// }
// export default App

//React admin work

import { Admin, Resource, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import Settings from "./components/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AuthProvider from "./components/providers/AuthProvider";
import { PostsList } from "./components/PostsList";
import { MyLayout } from "./components/MyLayOut";
import UserTable from "./components/UserTable";
import Main from "./components/Main";
import ProductList from "./components/Restaurant";
import Restaurant from "./components/Restaurant";
import Canvas from "./components/Canvas";
import Features from "./components/Features";
import './css/style.css'
import TableContainer from "./components/TableContainer";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin
    layout={MyLayout}
      dataProvider={dataProvider}
      loginPage={Login}
      authProvider={AuthProvider}
    >
      <Resource name="posts" list={PostsList} />
      <CustomRoutes noLayout>
        <Route path="/users-list" element={<Main />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/features" element={<Features />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/table" element={<TableContainer />} />
        {/* <Route path="/notetaker" element={<NoteTaker />} /> */}
      </CustomRoutes>
    </Admin>
  );
};

export default App;
