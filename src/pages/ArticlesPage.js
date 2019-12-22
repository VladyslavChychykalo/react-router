import React, { Component } from "react";
import ArticleList from "../components/ArticleList/ArticleList";
import * as articleAPI from "../services/article-api";
import queryString from "query-string";
// import { Route } from "react-router-dom";
// import ArticlePage from "./ArticlePage";
import CategorySelector from "../components/CategorySelector/CategorySelector";

const categories = [
  { value: "health", label: "Health" },
  { value: "technology", label: "Technology" },
  { value: "sports", label: "Sports" }
];

const getCategoryWithValue = (allCategories, value) =>
  allCategories.find(c => c.value === value);

const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default class ArticlesPage extends Component {
  state = { items: [] };

  // fetchAPI = query => {
  //   this.setState({ value: query });
  //   moviesAPI
  //     .fetchSearchedMovies(query)
  //     .then(items => this.setState({ items: items.results }));
  // };

  componentDidMount() {
    const { location } = this.props;
    const category = getCategoryFromLocation(location);
    console.log(location);

    articleAPI.fetchArticles(category).then(items => this.setState({ items }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);

    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(this.props.location);

    console.log("prevCategory: ", prevCategory);
    console.log("nextCategory: ", nextCategory);

    if (prevCategory !== nextCategory) {
      articleAPI
        .fetchArticles(nextCategory)
        .then(items => this.setState({ items }));
    }
  }

  handleCategoryChange = opt => {
    console.log(this.props.location);
    if (opt) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${opt.value}`
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: ""
    });
  };

  render() {
    const { items } = this.state;

    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    const selectedCategory = getCategoryWithValue(categories, qsCategory);
    // console.log(this.props.location);
    // console.log(queryString.parse(this.props.location.search));
    return (
      <div>
        <h1>Articles Page</h1>
        <CategorySelector
          options={categories}
          onChange={this.handleCategoryChange}
          value={selectedCategory}
        ></CategorySelector>
        <ArticleList items={items}></ArticleList>
        {/* <Route path={`${this.props.match.path}/:id`} component={ArticlePage} /> */}
      </div>
    );
  }
}
