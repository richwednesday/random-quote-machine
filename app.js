var RANDOM_FAMOUS_QUOTES_BASE_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
var cat_info = ['famous', 'movies'];

function getDataFromApi(callback) {
  var settings = {
    url: RANDOM_FAMOUS_QUOTES_BASE_URL,
    headers: {
      "X-Mashape-Key": "9VxkkR8yf7mshS1mt8Ndx1BuIXXqp1UhIlUjsncDayRSPfynIR",
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: {
      cat: cat_info[Math.floor(Math.random()*(2))],
      r: 'json',
    },
    dataType: 'json',
    type: 'POST',
    success: callback
  };
  $.ajax(settings);
}


function colorChanger(jsBody) {
	var colorsList = ['#FF00FF', '#FF6347', '#FFA500', '#0000CD', '#BC8F8F',	'#F4A460', '#DAA520', '#B8860B', '#D2691E',
									 '#8B4513', '#808000', '#FF0000', '#800000'];

	var colorName = colorsList[Math.floor(Math.random()*(13))];
	
	jsBody.css('background-color', colorName);
	jsBody.find('.content').css('color', colorName);
	jsBody.find('button').css('background-color', colorName);
}


// Render functions
function displayQuoteData(data) {
  var jsBody = $('body');
  
  document.querySelector('.js-quote').innerHTML = '<p><i class="fa fa-quote-left" aria-hidden="true"></i> ' + data.quote + '</p>';
  document.querySelector('.js-author').innerHTML = '<p>- ' + data.author + '</p>';
  //footer buttons
	document.querySelector('.js-footer').innerHTML = "<a target='_blank' href='https://twitter.com/intent/tweet?hashtags=quotes&via=iwok_joseph" +
								 "&text=\"" + encodeURIComponent(data.quote).replace(/'/g, '%27') + "\"%20" + 
								 encodeURIComponent(data.author).replace(/'/g, '%27') + "'>" +
							   "<button class='twitter-link'><i class='fa fa-twitter' aria-hidden='true'></i></button></a>" + 
							   "<button class='js-new new-quote'>New Quote</button>";

 	jsBody.find('.js-fade').css('opacity', '0');
	
  colorChanger(jsBody);

  jsBody.find('.js-fade').animate({
		opacity: 1
	}, 1000);
}

// Event listeners
$('.content').on('click', '.js-new', function() {
	getDataFromApi(displayQuoteData);
});

// Start page
getDataFromApi(displayQuoteData);




