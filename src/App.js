import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="app">
      <div className="text-center">
          <h1>Products App</h1>
          <Link to='/productlist' className="btn btn-primary">Go to Products List</Link>
      </div>
      <Switch>
        <Route path='/productlist' component={ProductList}/>
      </Switch>
    </div>
  );
}

export default App;
