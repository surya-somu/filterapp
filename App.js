import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Consulting from "./pages/Consulting";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route  exact path="/marketing" component={Marketing}></Route>
          <Route exact path="/development" component={Development}></Route>
          <Route exact path="/design" component={Design}></Route>
          <Route exact path="/consulting" component={Consulting}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
