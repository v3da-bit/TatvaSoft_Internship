import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import Login from './components/Login';
import Register1 from './components/Register1';
import MainPage from './components/MainPage';
import { Switch } from 'react-router-dom';
import Product from './components/Product';
import ProductList from './components/ProductList1';
import Editproduct from './components/Editproduct';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <MainPage ></MainPage>
        {/* <Editproduct/> */}
        <Cart/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register1/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/productList1' element={<ProductList/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
