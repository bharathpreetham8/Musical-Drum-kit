 
var NOB = document.querySelectorAll(".drum").length;
// Play sound by clicking with mouse

for(var i=0;i<NOB;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var clickbutton=this.innerHTML;
        musicon(clickbutton);
        animation(clickbutton);
       
    });

}

//   Play sound by pressing Key board letter (w,a,s,d,j,k,l)
document.addEventListener("keypress",function (event){
    musicon(event.key);
    animation(event.key);




});

function musicon(key){
    switch (key) {
        case 'w':
             var tom1= new Audio("sounds/tom-1.mp3");
             tom1.play();
         break;
         case 'a':
             var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();

         break;    
         case 's':
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
         break;
         case 'd':
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
         break;
         case 'j':
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
         break;
         case 'k':
             var kickbass = new Audio("sounds/kick-bass.mp3");
             kickbass.play();
         break;
         case 'l':
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
         break;                    

    
        default:
            console.log(key);
    }


}
//animation on buttons on html page of 0.1 sec by using function 
                   //setTimeout(func(),secounds)
function animation (value){
    var activebutton = document.querySelector("."+value);
    activebutton.classList.add("pressed");//adding style in css file of type class passed
    setTimeout(function(){
        activebutton.classList.remove("pressed");//removing css style after 0.1 sec


    },100);
}