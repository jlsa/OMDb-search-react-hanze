const axios = require('axios');

const ROOT_URL = 'http://www.omdbapi.com';

// OMDbAPI.idSearch('tt0460627', data => {
//   console.log(data);
// });
//
// OMDbAPI.titleSearch('bones', data => {
//   console.log(data);
// });
//
// OMDbAPI.search('bones', data => {
//   console.log(data);
// });

const search = (options, callback) => {
  var params = {
    s: options.term,
    page: options.page
  };
  
  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.Search); }
    })
    .catch(function(error) {
      console.error(error);
    });
}

const idSearch = (option, callback) => {
  var params = {
    i: option
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      // console.log('response',response);
      if (callback) { callback(response.data); }
    })
    .catch(function(error) {
      console.error(error);
    });
}

const titleSearch = (option, callback) => {
  var params = {
    t: option
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      console.log('response',response);
      if (callback) { callback(response.data); }
    })
    .catch(function(error) {
      console.error(error);
    });
}

module.exports = {
  idSearch: idSearch,
  titleSearch: titleSearch,
  search: search
};
