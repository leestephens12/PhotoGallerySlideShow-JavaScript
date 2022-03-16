//declare two variables one to hold the main featured picture and the other to hold the tumbnails
var featured = document.getElementById("featured");
var thumbnail = document.querySelector("ul");

function featuredImg(value) {
    //replaces the small part of the path with large to get the correct path to the full resolution pictures
    featured.setAttribute('src', value.replace("small", "large"));
    // variable used to see what color of flower we are on so that i can match it up with the img id to choose what the figcaption should be
    figcaptionPart = value.slice(15, value.length - 10);

    //variables to grayscale the pictures individually as well as remove the gray scale wehn a different photo is pressed
    var red = document.getElementById("red");
    var pink = document.getElementById("pink");
    var purple = document.getElementById("purple");
    var white = document.getElementById("white");
    var yellow = document.getElementById("yellow");

    //if we are on the picture with red flowers
    if(figcaptionPart == "red") {
        //this will be the new figcaption
        document.getElementById("featuredPic").innerHTML = "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich";
        //remove the grayscale for every thumbnail either than red
        yellow.style.setProperty("filter", "grayscale(0%)");
        pink.style.setProperty("filter", "grayscale(0%)");
        purple.style.setProperty("filter", "grayscale(0%)");
        white.style.setProperty("filter", "grayscale(0%)");
        red.style.setProperty("filter", "grayscale(100%)");

        //change background color to color of corresponding photos
        document.body.style.backgroundColor = "red";
    }

    //if we are on the picture with the yellow flowers
    else if(figcaptionPart == "yellow") {
        // new figcaption
        document.getElementById("featuredPic").innerHTML = "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich";
        //remove the graayscale from every photo either than yellow
        red.style.setProperty("filter", "grayscale(0%)");
        pink.style.setProperty("filter", "grayscale(0%)");
        purple.style.setProperty("filter", "grayscale(0%)");
        white.style.setProperty("filter", "grayscale(0%)");
        yellow.style.setProperty("filter", "grayscale(100%)");

        //change background color to color of corresponding photos
        document.body.style.backgroundColor = "yellow";
    }

    //if we are on the photo with the pink flowers
    else if(figcaptionPart == "pink") {
        //new figcaption
        document.getElementById("featuredPic").innerHTML = "Market in Münster, North Rhine-Westphalia, Germany By Dietmar Rabich";
        //remove the graayscale from every photo either than pink
        red.style.setProperty("filter", "grayscale(0%)");
        pink.style.setProperty("filter", "grayscale(100%)");
        purple.style.setProperty("filter", "grayscale(0%)");
        white.style.setProperty("filter", "grayscale(0%)");
        yellow.style.setProperty("filter", "grayscale(0%)");

        //change background color to color of corresponding photos
        document.body.style.backgroundColor = "pink";
    }

    //if we are on the photo with the purple flowers
    else if(figcaptionPart == "purple") {
        //new figcaption
        document.getElementById("featuredPic").innerHTML = "Sentmaring Park, Münster, North Rhine-Westphalia, Germany By Dietmar Rabich";
        //remove the graayscale from every photo either than purple
        red.style.setProperty("filter", "grayscale(0%)");
        pink.style.setProperty("filter", "grayscale(0%)");
        purple.style.setProperty("filter", "grayscale(100%)");
        white.style.setProperty("filter", "grayscale(0%)");
        yellow.style.setProperty("filter", "grayscale(0%)");

        //change background color to color of corresponding photos
        document.body.style.backgroundColor = "purple";
    }

    //if we are on the photo with the purple flowers
    else if(figcaptionPart == "white") {
        //new figcaption
        document.getElementById("featuredPic").innerHTML = "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany By Dietmar Rabich";
        //remove the graayscale from every photo either than white
        red.style.setProperty("filter", "grayscale(0%)");
        pink.style.setProperty("filter", "grayscale(0%)");
        purple.style.setProperty("filter", "grayscale(0%)");
        white.style.setProperty("filter", "grayscale(100%)");
        yellow.style.setProperty("filter", "grayscale(0%)");

        //change background color to color of corresponding photos
        document.body.style.backgroundColor = "white";
    }
}

// when one of the thumbnail photos are clicked
thumbnail.onclick = function(event){
    // changes the img source 
	var src = event.target.getAttribute('src');
    //call featuredImg function
	featuredImg(src);
}