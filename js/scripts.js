$(document).ready(function(){
  console.log('scripts loaded');


var url = 'http://api.open-notify.org/iss-now.json';
var url2 = 'https://nominatim.openstreetmap.org/reverse?format=xml&lat=52.5487429714954&lon=-1.81602098644987&zoom=18&addressdetails=1';
var urlArray = [url, url2];
var data = [];
var data2 = [];
var html = '';
var latitude = [];
var longitude = [];
var position = [];



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
      console.log(data.iss_position.latitude);
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
  url: url2,
  dataType: 'json',
  async: true,
  data: data2,
  success:function(data2){
    console.log(data2.result);
    place = data2.result;

    (function(place){
      console.log(place.result);
      html += '<div class="coordinates flex">';
      html += '<div class="text">';
      html += '<a href="' + place.url2 +'" target="_blank"';
        html += '<h2 class="headline">' + data2.result + '</h2>';
        html += '</a></div>'
      html += '</div>'; //close div here
    });

  }
});//end of second ajax




});//document ready end
