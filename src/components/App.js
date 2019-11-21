import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Articles from "../pages/Articles";
import NotFound from "../pages/NotFound";
import Nav from "./Nav/Nav";
import ArticlePage from "../pages/ArticlePage";

const containerStyle = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0 16px"
};

const App = () => (
  <div style={containerStyle}>
    <Nav></Nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;

// Switch рендерит до первого совпадения
// exact чтобы не повторялась Home из-за / который во всех Router
