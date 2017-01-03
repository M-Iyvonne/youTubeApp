var youTube = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    part: 'snippet',
    key: 'AIzaSyCuIOvbEjDG2yR9wZ8nweHD9GSVbNT6rfE',
    type: 'video'
  }
  $.getJSON(youTube, query, callback);
}


function displaySearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<p><img src="'+item.snippet.thumbnails.medium.url+'"/></p>' + 
       '<p>' + item.snippet.title + '</p>' + '<a href="https://www.youtube.com/watch?v="item.id.videoId' + Click + '</a>';
 
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){watchSubmit();});
