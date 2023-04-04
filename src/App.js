import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import ProductModal from "./components/ProductModal";
import LandingPage from "./components/Landing Page/LandingPage";
import Header from "./components/Header";
import Payment from "./components/Payment";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/product" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/pay" component={Payment} />
        <Route component={Default} />
      </Switch>
      <ProductModal />
    </React.Fragment>
  );
}

export default App;
