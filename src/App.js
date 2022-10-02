
// import React,{useState} from 'react';
// import {Route,Switch,Link} from 'react-router-dom';
// import Main  from './components/Main';
// import ProductList from './components/ProductList';
// import AddProduct from './components/AddProduct';
// import Tes from './components/tes';
// import Navbar from './components/Navbar';
// import InfiniteScroll from './components/InfiniteScroll';
// import './menu.css'

// const App = () =>{

//   return (
//     <>
    
//         <Navbar/> 
      
//         <div className="container" style={{marginTop:60}}>
//           <Switch>
//             <Route exact path='/' component={Main} />
//             <Route path='/products' component={ProductList} />
//             <Route path='/addproduct' component={AddProduct} />
//             <Route path='/tes' component={Tes} />
//             <Route path='/infinite-scroll' component={InfiniteScroll} />
//           </Switch>
          

//         </div>

        
        
        
    
    
//  </>
//   );
  
    
// }
// export default App

import { Admin, Resource, ListGuesser, EditGuesser, CustomRoutes} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from './components/UsersList';
import { PostsListTest } from './components/PostsListTest';
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';
import { UsersReport } from './components/UsersReport';
import UsersSearch from './components/UsersSearch';
import Settings from './components/Settings';
// import dataProvider from './components/dataProvider';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
 
function App() {
return (
<Admin dataProvider={dataProvider}  loginPage={Login} authProvider={AuthProvider}> 
<Resource name="users" list={UsersSearch}/>
{/* <Resource name="posts" list={ListGuesser}/> */}
<Resource name="posts" list={PostsListTest} edit={EditPost} create={AddPost}/>
<CustomRoutes noLayout>

            <Route path="/settings" component={Settings} />
        </CustomRoutes>
</Admin>
);
}
 
export default App;

  

  
  



