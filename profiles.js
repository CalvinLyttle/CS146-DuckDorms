var images = document.getElementsByClassName("image");

var img1 = images.item(0);
var img2 = images.item(1);
var img3 = images.item(2);
var img4 = images.item(3);
var img5 = images.item(4);
var img6 = images.item(5);


function checkSize(image){
    if (image.clientWidth != 300){
        location.reload();
    }
}

function checkImages(){
    checkSize(img1);
    checkSize(img2);
    checkSize(img3);
    checkSize(img4);
    checkSize(img5);
    checkSize(img6);
}

checkImages()

/*
var div = document.getElementById("overlay")

function increaseOpacity(){
    div.style.opacity = 1;
 }

 function decreaseOpacity(){
    div.style.opacity = 0;
 }

 img1.addEventListener("mouseover",increaseOpacity);
 img1.addEventListener("mouseleave",decreaseOpacity);

 */