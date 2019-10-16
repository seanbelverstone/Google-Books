import axios from "axios";

    let results = [];

    function getSearch(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(res => {
            results = res.data.items;
            console.log(results);
        });
    }


export default { getSearch, results };