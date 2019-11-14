var slider_content=document.getElementById('box');
var image = ["a","b","e","h"];
let g_s = document.getElementById('music_logo_container');
console.log(g_s);

/*CREATING THE NAV ICON THAT WILL BE USED IN TOP RIGHT CORNER OF MUSIC TAB*/
let menu_icon=document.createElement("img");
    menu_icon.src="img/menu_icon.png";
    menu_icon.style.height = "50px";
    menu_icon.style.width = "50px";
    menu_icon.style.marginRight = "20px";
    menu_icon.style.marginTop = "10px";
    menu_icon.style.cssFloat = "right";

    menu_icon.onclick = function(){

        /***** REMOVES MENU ICON IMAGE ********/
        g_s.removeChild(menu_icon);
        /**************************************/

        let menu_icon_white = document.createElement('img');
        menu_icon_white.src="img/menu_icon_white.png";
        menu_icon_white.style.width="50px";
        menu_icon_white.style.height="50px";
        menu_icon_white.style.float="right";
        menu_icon_white.style.marginRight="20px";
        menu_icon_white.style.marginTop="10px";



        let menu_icon_div = document.createElement("div");
        menu_icon_div.appendChild(menu_icon_white);
        menu_icon_div.setAttribute('class','menu_icon_div');
        menu_icon_div.style.width = "100%";
        menu_icon_div.style.height = "150px";
        menu_icon_div.style.background = "black";
        menu_icon_div.style.display = "block";
        menu_icon_div.style.opacity = ".8";
        menu_icon_div.style.marginTop = "-220px";
        g_s.appendChild(menu_icon_div);

        menu_icon_white.onclick=function(){
            menu_icon_div.style.display="none";
            g_s.appendChild(menu_icon);
        }
    }


/*CREATION ENDED*/

var i = image.length;

function nextImage(){
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

function changeGleamingStreets(){
    let g_s_logo=document.createElement("img");
    g_s_logo.src="img/gleamingstreets.png";
    g_s_logo.style.height = "180px";
    g_s_logo.style.width = "180px";
    g_s_logo.style.marginTop = "15px";


    g_s.innerHTML='';
    g_s.style.background = "#EAD721";
    g_s.style.height= 100+"%";
    g_s.style.borderRadius= "20px";

    g_s.appendChild(menu_icon);
    g_s.appendChild(g_s_logo);
}


//setInterval(nextImage, 5000);
    