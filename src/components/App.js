import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ArticlesPage from "../pages/ArticlesPage";
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
      <Route path="/" exact component={HomePage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;

// Switch рендерит до первого совпадения
// exact чтобы не повторялась Home из-за / который во всех Router
