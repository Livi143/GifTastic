// In case you forget: api key: 
// RGbEnN9zKfHY5SSY4IezroLzwtw7wkwF


    
    
  


 // save variable of topics, as a string
var topicsArray = ["ryan+gosling", "ski", "horse", "melania"]; // will hold topics here
// need to grab the inputed text to create the gif section...
// need to push topics to topicsArray
// need to create and name buttons from the variabls (append)
// gifs should post as static images


function createButtons(){
    $("#button").empty(); // this clears out hte extra buttons... inner value button div set = to 0
    for (var i=0; i< topicsArray.length; i++) {
        // dynamically make a button for each topic
        var button = $("<button>").addClass("theme").text(topicsArray[i]);
        $("#button").append(button);
        // name the button after the topic
    }
}

$("#input-submit").on("click", function(){
    var topics = $("#user-input").val().trim();
    console.log(topics);
    topicsArray.push(topics);
    createButtons();
})

// upon click event, call ajax
$(document).on("click", ".theme", function(){
    var search = $($(this)).text().trim();
    console.log(search);
    $.ajax({
        type: "get",
        
        url: "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key=RGbEnN9zKfHY5SSY4IezroLzwtw7wkwF&limit=5"
        
    }).then(function(giffy){
        console.log(giffy);
        console.log(giffy.data[0].url);
        for (var j=0; j<giffy.data.length; j ++) {
            // .fixed_height.url allows for motion
            var image= $("<img>").attr("src", giffy.data[j].images.original_still.url).addClass("gifImage")
                .attr("clickedOn","false").attr("animatedGif", giffy.data[j].images.original.url).attr("stillGif", giffy.data[j].images.original_still.url);
                    var rating = $(`<p>rating: ${giffy.data[j].rating}</p>`);
            $("#gifs").append(image, rating);
            // this makes the gifs animate automatically
            // var image= $("<img>").attr("src", giffy.data[j].images.fixed_height.url);
            // $("#gifs").append(image);

        }
    })

});

// this needs to be .still? or some other function
createButtons();

// need a onclick function to make the stills animate...
$(document).on("click", ".gifImage", function(){
    var clickedOn = $(this).attr("clickedOn");
    console.log($(this));
    if (clickedOn == "true") {
        console.log("this has been clicked on already");
        $(this).attr("clickedOn", "false");
        console.log($(this).attr("clickedOn"));
        $(this).attr("src", $(this).attr("stillGif"));
    }    else  if (clickedOn=="false") {
            console.log("this has not been clicked on");
            $(this).attr("clickedOn", "true");
            console.log($(this).attr("clickedOn"));
            $(this).attr("src",$(this).attr("animatedGif"));
        
    }
})


// also need an onclick function to make animations go still (same function?)

// don't forget the ratings!!! (listed under the buttons or gifs...)





