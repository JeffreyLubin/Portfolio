var slider_content=document.getElementById('box');
var image = ["a","b","e","h"];
let g_s = document.getElementById('music_logo_container');
let studio = document.getElementById('music_logo_container');

/*********** ATTEMPTING TO CHANGE THE TITLE ***********/
let title = document.getElementsByTagName('title')
console.log(title);
let about = document.getElementById('nav_about');
let home = document.getElementById('nav_home');
let portfolio = document.getElementById('nav_portfolio');
let music_projects = document.getElementById('nav_music_projects');
let contact = document.getElementById('nav_contact');
console.log(about);

about.onclick=function changeTitle(){
    document.title="Jeffrey Lubin || About";
}

about.wheel=function changeTitle(){
    document.title="Jeffrey Lubin || About";
}

home.onclick=function changeTitle(){
    document.title="Jeffrey Lubin || Home";
}

portfolio.onclick=function changeTitle(){
    document.title="Jeffrey Lubin || Portfolio";
}

music_projects.onclick=function changeTitle(){
    document.title="Jeffrey Lubin || Music Projects";
}

contact.onclick=function changeTitle(){
    document.title="Jeffrey Lubin || Contact";
}



/*CREATING THE NAV ICON THAT WILL BE USED IN TOP RIGHT CORNER OF MUSIC TAB*/
let menu_icon=document.createElement("img");
    menu_icon.src="img/menu_icon.png";
    menu_icon.style.height = "50px";
    menu_icon.style.width = "50px";
    menu_icon.style.marginRight = "20px";
    menu_icon.style.marginTop = "10px";
    menu_icon.style.cssFloat = "right";

let gleaming_streets_logo = document.createElement('img');
    gleaming_streets_logo.src= "img/gleamingstreets_white.png";
    gleaming_streets_logo.style.width="100px";
    gleaming_streets_logo.style.height="100px";
    gleaming_streets_logo.style.display="inline-block";
    gleaming_streets_logo.style.marginTop ="30px";

let studio_logo_header = document.createElement('img');
    studio_logo_header.src= "img/234_white.png";
    studio_logo_header.style.width="100px";
    studio_logo_header.style.height="100px";
    studio_logo_header.style.display="inline-block";
    studio_logo_header.style.marginTop ="10px";
    studio_logo_header.style.marginRight ="75px";
    studio_logo_header.style.marginLeft ="75px";
    //studio_logo_header.style.float="left";


let rar_logo = document.createElement('img');
    rar_logo.src= "img/rar_records_white.png";
    rar_logo.style.width="150px";
    rar_logo.style.height="100px";
    rar_logo.style.display="inline-block";
    rar_logo.style.marginTop ="10px";

    menu_icon.onclick = function musicNav(){

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
        menu_icon_div.appendChild(gleaming_streets_logo);
        menu_icon_div.appendChild(studio_logo_header);
        menu_icon_div.appendChild(rar_logo);
        menu_icon_div.setAttribute('class','menu_icon_div');
        menu_icon_div.style.width = "100%";
        menu_icon_div.style.height = "150px";
        menu_icon_div.style.background = "black";
        menu_icon_div.style.display = "block";
        menu_icon_div.style.opacity = ".8";
        menu_icon_div.style.marginTop = "-220px";
        g_s.appendChild(menu_icon_div);

        menu_icon_white.onclick=function removeMusicNav(){
            menu_icon_div.style.display="none";
            g_s.appendChild(menu_icon);
        }

        gleaming_streets_logo.onclick= function changeGleamingStreets(){
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
        studio_logo_header.onclick= function change234Studios(){
            let studio_logo=document.createElement("img");
            studio_logo.src="img/234.png";
            studio_logo.style.height = "180px";
            studio_logo.style.width = "180px";
            studio_logo.style.marginTop = "15px";
        
        
            studio.innerHTML='';
            studio.style.background = "white";
            studio.style.height= 100+"%";
            studio.style.borderRadius= "20px";
        
            studio.appendChild(menu_icon);
            studio.appendChild(studio_logo);
        }

        rar_logo.onclick=function changeRarRecords(){
            let studio_logo=document.createElement("img");
            studio_logo.src="img/rar_records.png";
            studio_logo.style.height = "180px";
            studio_logo.style.width = "250px";
            studio_logo.style.marginTop = "15px";
        
        
            studio.innerHTML='';
            studio.style.background = "#C3073f";
            studio.style.height= 100+"%";
            studio.style.borderRadius= "20px";
        
            studio.appendChild(menu_icon);
            studio.appendChild(studio_logo);
        }

    }


/************CREATION ENDED****************/

/************** MUSIC PROJECTS TABS *********/

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

function change234Studios(){
    let studio_logo=document.createElement("img");
    studio_logo.src="img/234.png";
    studio_logo.style.height = "180px";
    studio_logo.style.width = "180px";
    studio_logo.style.marginTop = "15px";


    studio.innerHTML='';
    studio.style.background = "white";
    studio.style.height= 100+"%";
    studio.style.borderRadius= "20px";

    studio.appendChild(menu_icon);
    studio.appendChild(studio_logo);
}

function changeRarRecords(){
    let studio_logo=document.createElement("img");
    studio_logo.src="img/rar_records.png";
    studio_logo.style.height = "180px";
    studio_logo.style.width = "250px";
    studio_logo.style.marginTop = "15px";


    studio.innerHTML='';
    studio.style.background = "#C3073f";
    studio.style.height= 100+"%";
    studio.style.borderRadius= "20px";

    studio.appendChild(menu_icon);
    studio.appendChild(studio_logo);
}

/************* MUSIC PROJECTS END *************/

/************* IMAGE SLIDESHOW ************/

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

//setInterval(nextImage, 5000);

/************* SLIDESHOW END ****************/


    