import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";
import Proceed from "./components/proceed";
import Payment from "./components/Payment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/proceed" component={Proceed}/>
        <Route exact path="/payment" component={Payment}/>
      </Switch>
    </Router>


  );
}

export default App;
