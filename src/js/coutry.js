'use strict';
import countrySearch from './services/country-service';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles'),
};

refs.searchForm.addEventListener('input', countrySearchInputHandler);

function countrySearchInputHandler(e) {
  e.preventDefault();
   
   const searchQuery = e.currentTarget.elements.query.value;
  console.log(searchQuery);
  
   countrySearch.fetchArticles(searchQuery);
}
