'use strict';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';


export default {
    fetchArticles(query) {
      const requestParams = `${query}`;
      fetch(baseUrl + requestParams,options)
        .then(res => res.json())
        .then(data => {
         console.log(data);
        });
    },
   
  };
