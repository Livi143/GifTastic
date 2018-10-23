<script>
    //javascript, jQuery
    // this is supposed to provide ryan goslin gifs... something's wrong though
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=RGbEnN9zKfHY5SSY4IezroLzwtw7wkwF&limit=5");
    xhr.done(function(data) { console.log("success got data", data); });
  </script>


//javascript, jQuery
// this is supposed to provide ryan goslin gifs... something's wrong though
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=RGbEnN9zKfHY5SSY4IezroLzwtw7wkwF&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
