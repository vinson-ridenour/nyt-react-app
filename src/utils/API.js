import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "3956f875f76d47a09f35ead8cbfa8bba";
  
const API = {
  // Search for articles
  search: function(searchData) {
    return axios.get(`${BASEURL}${APIKEY}&q=${searchData.searchTerm}&begin_date=${searchData.yearStart}0101&end_date=${searchData.yearEnd}0101`);
  },
  // Retrieves all articles from the db
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(text) {
    return axios.post("/api/articles", { text });
  },
  // Deletes a article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
  // // Toggles a  favorite property in the db
  // favoriteQuote: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/articles/${_id}`, { favorited });
  // }
};

export default API;