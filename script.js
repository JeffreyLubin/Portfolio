var slider_content=document.getElementById('box');
var image = ["a","b","e","h"];

var i = image.length;

window.onload(){function nextImage(){
    if(i<image.length){
        i= i+1;
    }
    else{
        i=1;
    }
        slider_content.innerHTML = "<img src=img/about/"+image[i-1]+".jpg>";
}

function previousImage(){
    if(i<image.length+1 && i>1){
        i= i-1;
    }
    else{
        i=image.length;
    }
        slider_content.innerHTML = "<img src=img/about/"+image[i-1]+".jpg>";
}

setInterval(nextImage, 5000);
    
    function changeTitleAbout(){
        newtitle ="About || Jeffrey Lubin";
        title = document.getElementsByClassName('theTitle')
        title.innerHTML = "<title>"+newtitle+"</title>";
    }
}