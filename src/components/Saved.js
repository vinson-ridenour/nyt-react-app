import React, { Component } from "react";
import API from "../utils/API";
import { Button, Panel } from "react-bootstrap";

class Saved extends Component {
    constructor() {
    super();

    this.state = {
    articles: []
    };

// Binding getArticles to this component since we'll be passing this method to 
// other components to use
    this.getArticlesSaved = this.getArticlesSaved.bind(this);
    }
  // Getting all articles when the component mounts
    componentDidMount() {
        this.getArticlesSaved();
  }

  getArticlesSaved = () => {
    API.getSavedArticles().then((res) => {
      const favoriteArticles = res.data.filter(article => article.faved === true);
      this.setState({ articles: favoriteArticles });
    });
  }

//   deleteArticle(id) {
//     API.deleteArticles(id)
//       .then(......)
//   }

  // A helper method for rendering one panel for each article
  renderArticles() {
    return this.state.articles.map(article => (
      <Panel>
        key={article._id}
        {/* <Button onClick={() => {this.deleteArticle(article._id)}}>Remove</Button> */}
      </Panel>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1 className="saved-header">Saved Articles</h1>
        <div className="row">
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Saved;