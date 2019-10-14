import axios from "axios";

export default {
    getSearch: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(res => {
            console.log(res);
        });
    }
}