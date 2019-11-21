import React, { Component } from "react";
import ArticleList from "../components/ArticleList/ArticleList";
import * as articleAPI from "../services/article-api";
// import { Route } from "react-router-dom";
// import ArticlePage from "./ArticlePage";

export default class Article extends Component {
  state = { items: [] };
  componentDidMount() {
    articleAPI.fetchArticles().then(items => this.setState({ items }));
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        <ArticleList items={items}></ArticleList>
        {/* <Route path={`${this.props.match.path}/:id`} component={ArticlePage} /> */}
      </div>
    );
  }
}
