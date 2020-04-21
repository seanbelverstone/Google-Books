import axios from "axios";


export default {
    
    // Performs the search through GoogleBooks api
    getSearch: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

      // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
};
