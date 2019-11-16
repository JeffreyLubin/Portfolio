var slider_content=document.getElementById('box');
var image = ["a","b","e","h"];
let g_s = document.getElementById('music_logo_container');
let studio = document.getElementById('music_logo_container');
let record_label = document.getElementById('music_logo_container');

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

/***** THIS IS THE ONE THAT SHOWS ON THE MAIN PAGES*******/
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

let menu_icon_white = document.createElement('img');
    menu_icon_white.setAttribute('class','menu_icon_white');
    menu_icon_white.src="img/menu_icon_white.png";
    menu_icon_white.style.width="50px";
    menu_icon_white.style.height="50px";
    menu_icon_white.style.marginLeft="200px";
    menu_icon_white.style.diplay="block";
    menu_icon_white.style.marginBottom="25px";


let menu_icon_div = document.createElement("div");
        
    menu_icon_div.appendChild(gleaming_streets_logo);
    menu_icon_div.appendChild(studio_logo_header);
    menu_icon_div.appendChild(rar_logo);
    menu_icon_div.appendChild(menu_icon_white);

    menu_icon_div.setAttribute('class','menu_icon_div');
    menu_icon_div.style.width = "100%";
    menu_icon_div.style.height = "150px";
    menu_icon_div.style.background = "black";
    menu_icon_div.style.display = "block";
    menu_icon_div.style.opacity = ".8";
    menu_icon_div.style.marginTop = "-220px";

    menu_icon.onclick = function musicNav(){

        /***** REMOVES MENU ICON IMAGE ********/
        g_s.removeChild(menu_icon);

        /**************************************/

        menu_icon_div.style.display = "block";
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

/**************** GLEAMING STREETS TAB **********/

function changeGleamingStreets(){

    let g_s_container= document.createElement('div');
    g_s_container.setAttribute('class','g_s_container');
    g_s_container.style.width= "100%";
    g_s_container.style.height = "100%";
    g_s_container.style.background= "black";

    let g_s_logo=document.createElement("img");
    g_s_logo.src="img/gleamingstreets.png";
    g_s_logo.style.height = "180px";
    g_s_logo.style.width = "180px";
    g_s_logo.style.marginTop = "15px";
    g_s_logo.style.paddingLeft = "70px";

    g_s_container_text = document.createElement('p');
    g_s_container_text.setAttribute('class','g_s_container_text');
    g_s_container_text.style.color = "#EAD721"
    g_s_container_text.style.fontSize= "24px";
    g_s_container_text.style.paddingTop= "20px";
    g_s_container_text.style.textalign = "center";
    g_s_container_text.style.borderBottom = "1px solid #C3073f";
    g_s_container_text.innerHTML = "This is my band, Gleaming Streets. We started in the year 2017. I used to write hardcore music, but the genre became stale and for some reason, I found myself incapable of writing that style of music anymore, so my natural music writing abilities came forth in the form of Punk Rock. All I had at the time was a laptop I dedicated to recording demos, and about 5-6 songs that were ready for the demo treatment. Around the end of 2017/Early 2018, I actually wrote 5 brand new songs, which would later end up on our first <i>'Self-Titled'</i> EP. Over time, I found band members who could help back up the instrumentals live, and while everything was fine for a while, my emotional health started to slip up, and I had to take my focus off of music until I got things right, which is why the first EP didn't end up coming out until September 7th, 2019, which is also the date of our first show at The Paper Tiger. The first show was amazing, there were a lot of friends, family and fun. There was a giant circle pit going on for a majority of our set, and people were actually really digging the music. We had our official merch table set up where we sold some shirts, and gave out free CD's all night. It was a blissful moment I'll keep with me forever. As for the future... well, I accomplished everything I wanted for this band for 2019, so anything beyond the first EP is just playing by ear, but in 2020, there's plans to put out another EP, play even more shows, and hopefully go on an international tour. We don't know yet, but no one ever really knows where life is going to take them until it takes them there. If you read through this, thank you so kindly, feel free to check us out on Spotify, Apple Music, Google Play, YouTube, and all those great streaming companies!";
    //g_s_container.style.display= "inline-block";

    g_s_container_text_album = document.createElement('p');
    g_s_container_text_album.setAttribute('class','g_s_container_text_album');
    g_s_container_text_album.style.color = "#EAD721"
    g_s_container_text_album.style.fontSize= "24px";
    g_s_container_text_album.style.paddingTop= "20px";
    g_s_container_text_album.style.textalign = "center";
    g_s_container_text_album.style.flaot = "right";
    g_s_container_text_album.innerHTML = "<i><u>Self-Titled</i></u><br>1. It's A Better Life <br> 2. The Other Day <br> 3. Listen Up, Buttercup <br> 4. You're Not Okay <br> 5. We're Not Okay <br> 6. Wake Up";

    g_s_album = document.createElement('img');
    g_s_album.src="img/gleaming_streets_album.jpg";
    g_s_album.style.height = "400px";
    g_s_album.style.width = "400px";
    g_s_album.style.float= "left";
    g_s_album.style.marginBottom= "10px";

    music_brand_logo = document.createElement('div');
    music_brand_logo.setAttribute('class','music_brand_logo_container')
    music_brand_logo.style.background="black";
    music_brand_logo.style.float="right";
    music_brand_logo.style.marginRight="250px";
    music_brand_logo.style.width="300px";
    music_brand_logo.style.height="50px;"

    spotify_logo=document.createElement('div');
    spotify_logo.style.display = "inline";
    spotify_logo.style.marginRight = "20px";
    spotify_logo.innerHTML = '<i class="fa fa-spotify" aria-hidden="true"></i>';

    apple_logo = document.createElement('div');
    apple_logo.innerHTML = '<i class="fa fa-apple" aria-hidden="true"></i>';
    apple_logo.style.marginRight = "20px";
    apple_logo.style.display = "inline";

    amazon_logo = document.createElement('div');
    amazon_logo.style.marginRight = "20px";
    amazon_logo.innerHTML = '<i class="fa fa-amazon" aria-hidden="true"></i>';
    amazon_logo.style.display = "inline";

    youtube_logo = document.createElement('div');
    youtube_logo.style.marginRight = "20px";
    youtube_logo.innerHTML = '<i class="fa fa-youtube-play" aria-hidden="true"></i>';
    youtube_logo.style.display = "inline";

    g_s.innerHTML='';
    g_s.style.background = "#EAD721";
    g_s.style.height= 100+"%";
    g_s.style.borderRadius= "20px";

    g_s.appendChild(menu_icon);
    g_s.appendChild(g_s_logo);
    g_s.appendChild(g_s_container);
    g_s_container.appendChild(g_s_container_text);
    g_s_container.appendChild(g_s_album);
    g_s_container.appendChild(g_s_container_text_album);
    g_s_container.appendChild(music_brand_logo);
    music_brand_logo.appendChild(spotify_logo);
    music_brand_logo.appendChild(apple_logo);
    music_brand_logo.appendChild(amazon_logo);
    music_brand_logo.appendChild(youtube_logo);

}


/************* GLEAMING STREETS END **************************/

/************ 234 STUDIOS SECTION  ***************************/

function change234Studios(){

    let studio_container= document.createElement('div');
    studio_container.setAttribute('class','studio_container');
    studio_container.style.width= "100%";
    studio_container.style.height = "100%";
    studio_container.style.background= "black";

    let studio_logo=document.createElement("img");
    studio_logo.src="img/234.png";
    studio_logo.style.height = "180px";
    studio_logo.style.width = "180px";
    studio_logo.style.marginTop = "15px";

    studio_container_text = document.createElement('p');
    studio_container_text.setAttribute('class','studio_container_text');
    studio_container_text.style.color = "white"
    studio_container_text.style.fontSize= "24px";
    studio_container_text.style.paddingTop= "20px";
    studio_container_text.style.textalign = "center";
    studio_container_text.style.borderBottom = "1px solid white";
    studio_container_text.innerHTML = "234 Studios is the studio that I operate. I engineer, mix and produce bands with various equipment that I own. My journey to be a music production engineer started in early 2019. For about 4 years, give or take, I had been demoing my own work. At first it was simply for myself to be able to get my songwriting ideas down on paper, but as I progressed, I learned tons of things un-intentionally. Early 2019 I started recording demos for Gleaming Streets 2020 EP, and in the process of showing them to friends, family and fans, the main response I got was how much better the audio quality got. This was un-intended, as, at the time, I was simply doing what I did best and that was recording demos, but it quickly dawned on me that music production is something I could pick up if I learned more in depth theories about it. This prompted me to endlessly scour the internet for advice, articles, and tutorials on using equalizers, compressors, reverb, auto-tune, and the works. After I got the basis down, I began self-producing Gleaming Streets first EP, and I also took on a few side projects, most notably, Thrones, and Darius Davila's side project. I am still processing and learning new techniques day after day, but I'm definitely interested in taking on more clients, so if you think we'd be a good match to get your music recorded, please reach out to me in the 'Contact' area of the website!"
    //g_s_container.style.display= "inline-block";

    studio_equipment=document.createElement('div');
    studio_equipment.setAttribute('class','studio_equipment')
    studio_equipment.style.width = "50%";
    studio_equipment.style.height = "500px";
    studio_equipment.style.margin = "0 auto";
    studio_equipment.style.background= "white";
    studio_equipment.style.color= "black";
    studio_equipment.style.borderRadius= "20px";
    studio_equipment.style.overflow= "scroll";
    studio_equipment.innerHTML="<u>Equipments & Softwares I use</u> <br> DAW: Reaper <br> Interface: Presonus Quantum 26x32 <br> Monitors: Yamaha HS5 <br> Computer: iMac & Macbook <br> Alesis Q49 (Synth) <br> <u>Guitars</u> <br> Ibanez S621QM <br> Ibanez GIO (Bass) <br> Tim Armstrong Hellcat <br> Carlo Robelli CGE100 <br> Yamaha FD01S <br> <u>Microphones</u> <br> AKG C214 <br> Shure SM57 <br> Sennheise E604 (x4) <br> Rode NT5 (x2) <br> Shure Beta 52A "
    studio_equipment.style.fontSize= "24px"

    studio_playlist=document.createElement('div');
    studio_playlist.innerHTML = "<iframe width='500px' height='300' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/925502449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>";
    studio_playlist.style.marginTop = "20px"

    studio.innerHTML='';
    studio.style.background = "white";
    studio.style.height= 100+"%";
    studio.style.borderRadius= "20px";

    studio.appendChild(menu_icon);
    studio.appendChild(studio_logo);
    studio.appendChild(studio_container);
    studio_container.appendChild(studio_container_text);
    studio_container.appendChild(studio_equipment);
    studio_container.appendChild(studio_playlist);
}

/****************** 234 STUDIOS ENDS **********************************/

function changeRarRecords(){
    let rar_container= document.createElement('div');
    rar_container.setAttribute('class','rar_container');
    rar_container.style.width= "100%";
    rar_container.style.height = "100%";
    rar_container.style.background= "black";

    let rar_logo_nav=document.createElement("img");
    rar_logo_nav.src="img/rar_records.png";
    rar_logo_nav.style.height = "180px";
    rar_logo_nav.style.width = "220px";
    rar_logo_nav.style.marginTop = "15px";
    rar_logo_nav.style.paddingLeft = "70px";

    rar_container_text = document.createElement('p');
    rar_container_text.setAttribute('class','g_s_container_text');
    rar_container_text.style.color = "#C3073f"
    rar_container_text.style.fontSize= "24px";
    rar_container_text.style.paddingTop= "20px";
    rar_container_text.style.textalign = "center";
    rar_container_text.style.borderBottom = "1px solid #C3073f";
    rar_container_text.innerHTML = "This is the project that I like to call 'Run Around Records'. This one started in 2016 with the formation of my, now defunct, post-hardcore band '<i>Between Then And Now</i>'. I had always had dreams of owning a record label, and I figured that starting one couldn't be as hard as making sure AT LEAST one album gets released succesfully. By succesfully, I'm not talking that the album gets released and it's a world wide hit, but what I'm talking about is making sure the proper promotion, marketing, distribution, and funding has been accounted for, prompting a succesful launch. As long as the album gets out on time, and it has good songs, I'd consider it succesful. I learned a lot of lessons with signing my original band. I currently only have my current band, <i>gleaming streets</i>, signed to this label, but it's better than nothing, and the amount of time, money and enery i've put in the band thus far has reaped us rewards, I just can't wait to see what that projects future holds. <br> So, why call myself a record label if I only have my own projects signed?<br>Well, I'm not going to lie, I lowkey want to sign another band officially. I want to have a trial run for exactly one band, where we team up, get some music made, get the album physically/digitally distributed, invest in some nice photos and shoot a music video, then whatever happens after is up to the good lord.<br>I'm honestly in the business of helping people out, and I know what it's like to be a talented great musician, but without the resources to prove it, and that's why I want to sign a band, and help get whoever that is to the next level. <br> If you're reading this, and you're interested, go to the 'Contact' part of my website here and send me an email and we can discuss! I'm very open and want to finally get this record label up and running, so if you think you've got what it takes, or, more importantly, you think I've got what it takes, contact me!";

    rar_container_p=document.createElement('p');
    rar_container_p.style.color= "#C3073f";
    rar_container_p.style.fontSize = "48px";
    rar_container_p.innerHTML = "<u>Releases</u>"

    btan_album = document.createElement('img');
    btan_album.src="img/between_then_and_now.jpg";
    btan_album.style.height = "400px";
    btan_album.style.width = "400px";

    gs_album = document.createElement('img');
    gs_album.src="img/gleaming_streets_album.jpg";
    gs_album.style.height = "400px";
    gs_album.style.width = "400px";

    album_table = document.createElement('table');
    album_table.style.margin = "200px";

    album_table_tr = document.createElement('tr');
    
    album_table_td_gs = document.createElement('td');
    album_table_td_gs.style.padding= "0 20px";

    album_table_td_btan = document.createElement('td');
    album_table_td_btan.style.padding= "0 20px";


    record_label.innerHTML='';
    record_label.style.background = "#C3073f";
    record_label.style.height= 100+"%";
    record_label.style.borderRadius= "20px";

    record_label.appendChild(menu_icon);
    record_label.appendChild(rar_logo_nav);
    record_label.appendChild(rar_container);
    rar_container.appendChild(rar_container_text);
    rar_container.appendChild(rar_container_p);
    rar_container.appendChild(album_table);
    album_table.appendChild(album_table_tr);
    album_table_tr.appendChild(album_table_td_btan);
    album_table_td_btan.appendChild(btan_album);
    album_table_tr.appendChild(album_table_td_gs);
    album_table_td_gs.appendChild(gs_album);
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



