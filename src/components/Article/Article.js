import React from "react";

const Article = ({ title, imageUrl, author, category, text, onGoBack }) => (
  <article>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
    <span>
      <b>Author: {author}</b>
    </span>
    <span>
      <b>Category: {category}</b>
    </span>
    <p>{text}</p>
    <button type="button" onClick={onGoBack}>
      Bact to articles
    </button>
  </article>
);

export default Article;
