import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShoppingCart from './Components/ShoppingCart';
import ProductDetail from './Pages/ProductDetail';
import './HomePage.css';
import './ProductList.css';
import './ShoppingCart.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/Block14-Project-Agile/product-detail/:idprod"
          render={ (props) => <ProductDetail { ...props } /> }
        />
        <Route path="/Block14-Project-Agile/shopping-cart" component={ ShoppingCart } />
        <Route path="/Block14-Project-Agile/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
