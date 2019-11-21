import React, { Component } from "react";
import Article from "../components/Article/Article";
import * as articleAPI from "../services/article-api";

const getIdFromProps = props => props.match.params.id;

export default class ArticlePage extends Component {
  state = { article: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    articleAPI
      .fetchArticleWithId(id)
      .then(article => this.setState({ article }));
  }

  handleGoBack = () => {
    this.props.history.push("/articles");
  };

  render() {
    console.log(this.props.match);
    const { article } = this.state;
    return (
      <div>
        <h1>Single Article Page</h1>
        {article && <Article {...article} onGoBack={this.handleGoBack} />}
      </div>
    );
  }
}
