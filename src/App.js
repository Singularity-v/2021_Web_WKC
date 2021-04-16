import {createContext} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from "./page/Home"
import Product from './page/Product'

export const StoreContext = createContext();
function App() {
  return (
    <StoreContext.Provider value = {{title:"Your Home"}}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
    </StoreContext.Provider>
  
  );
}

export default App;