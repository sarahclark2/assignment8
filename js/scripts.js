$(document).ready(function(){
  console.log('scripts loaded');


var url = 'http://api.open-notify.org/iss-now.json';
var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=&lon=';
var urlArray = [url, url2];
var data = [];
var data2 = [];
var html = '';
var latitude = 'data.iss_position.latitude';
var longitude = 'data.iss_position.longitude';
var position = [];
var country = [];



//get coordinates to show up



$.ajax({
  type: 'GET',
  url: url,
  dataType: 'json',
  async: true,
  data: data,
  success:function(data){
    console.log(data.iss_position);
    position = data.iss_position;


    (function(position){
      html += '<div class="coordinates flex">';
      html += '<div class="text">';
      html += '<a href="' + position.url +'" target="_blank"';
        html += '<h2 class="headline">' + data.iss_position + '</h2>';
        html += '</a></div>'
      html += '</div>'; //close div here
    });
      $('#results').html(html);

}//end of function

});//end of first ajax

$.ajax({
  type: 'GET',
  url: url2 + latitude + longitude,
  dataType: 'json',
  async: true,
  data: data2,
  success:function(data2){
    console.log(data2.address.country);
    place = data2.country;

    (function(place){
      console.log(place.result);
      html += '<div class="coordinates flex">';
      html += '<div class="text">';
      html += '<a href="' + place.url2 +'" target="_blank"';
        html += '<h2 class="headline">' + data2.country + '</h2>';
        html += '</a></div>'
      html += '</div>'; //close div here
    });

  }
});//end of second ajax




});//document ready end
