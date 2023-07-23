import React from "react";
import Home from "./Home";
import About from "./About";
import Hooks from "./Hooks"
import Form from "./Form";
import Login from "./Login";
import Contact from "./Contact"
import Services from "./Services"
import Ourwork from "./Ourwork"
import Bookonline from "./Bookonline"
import {Route,Switch} from "react-router-dom";
function App() {
  return (
<>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/hooks" component={Hooks}/>
  <Route exact path="/form" component={Form}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/contact" component={Contact}/>
  <Route exact path="/services" component={Services}/>
  <Route exact path="/ourwork" component={Ourwork}/>
  <Route exact path="/bookonline" component={Bookonline}/>
  <Route component={Home}/>
</Switch>
</>
  );
}

export default App;
