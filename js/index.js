//Array list of the streamers
let streamers = ["ESL_SC2","OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// https://wind-bow.glitch.me/twitch-api/streams/Toadskii?callback="
for(let i = 0;i < streamers.length;i++){      //for loop for fetching api,looping through the streamers api data 
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+ streamers[i]+"?callback=",function(data){    //first api call to get streamers status
    let status = data.stream;    // getting the stream status and setting it to the variable stream 
    
    //second API call to get streamers info
  $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+streamers[i]+"?callback=",function(data2){ 
       let logo = data2.logo;
       let link = data2.url;
       let name2 = data2.display_name;
       let caption = data2.status;  
         
       if(status === null){    //if condition to check if online and the code to run,in this case if its null or offline
        $("#info").append("<li class='offline'><img class='logo' src="+ logo +"></img><span class='description'><a target='_blank' href='"+link+"'>"+ name2 +"</a></span></li>")
        }else{  //when its online
          $("#info").append("<li class='online'><img class='logo' src="+ logo +"></img><span class='description'><a target='_blank' href='"+ link +"'>"+ name2 +" - "+  caption +"</a></span></li>");
        }
  })//Second API call end
  }) //first API Call end
} //for loop block

// //Onclick buttons function calls to switch between offline and online streamers
$("#online").on("click", function(){    
    $(".online").removeClass("none");   //class none is set to display:none in css so we remove it from online class and add it to offline class.Same method as rest of the code
    $(".offline").addClass("none");
  });

$("#offline").on("click", function(){
    $(".offline").removeClass("none");
    $(".online").addClass("none");
  });

$("#all").on("click", function(){
    $(".offline").removeClass("none");
    $(".online").removeClass("none");
  });