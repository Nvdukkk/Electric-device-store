import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/Product/ProductList";
import Details from "./components/Product/Details";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import ProductModal from "./components/Product/ProductModal";
import LandingPage from "./components/Landing Page/LandingPage";
import Header from "./components/Header";
import Payment from "./components/Payment";
import ComingSoon from "./components/ComingSoon";

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
        <Route path="/comingsoon" component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
      <ProductModal />
    </React.Fragment>
  );
}

export default App;
