$(document).ready(function(){
    $("#signup-section").hide();
    $("#signup-btn").click(function()
    {
        $("#login-section").fadeOut();
        setTimeout(function(){
            $("#signup-section").fadeIn();
        },400);
    });
    $("#gbt-login").click(function()
    {
        $("#signup-section").fadeOut();
        setTimeout(function(){
            $("#login-section").fadeIn();
        },400);
    });
    var myModalEl = document.getElementById('modalform')
    myModalEl.addEventListener('hidden.bs.modal', function (){
        $("#login-section").show();
        $("#signup-section").hide();
    });
});
//--------------------------------------------- Search Bar ---------------------------------------------//
function search_song(){
    let input=document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementByClassName('Song');
    for(i=0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="not found";
        }
        else{
            x[i].style.display="list-item";
        }
    }
}
var sbar=document.getElementById("searchbar");
var isOpen=false;
function barAnimate() {
    console.log(isOpen);
    if(!isOpen)
    {
        isOpen=true;
        document.querySelector(".search").classList.remove("hw-s");
        sbar.classList.add("search-disp");
        sbar.focus();    
    }
}
document.getElementById("searchbar").addEventListener("focusout",function(){
    setTimeout(function(){
        sbar.classList.remove("search-disp");
        document.querySelector(".search").classList.add("hw-s");
        isOpen=false;
    },270);
});
//-------------------------------------------- Music button ----------------------------------------------//
function playMusic(){
    wrapper.classList.add("paused");
    MainAudio.play();
}
function playMusic(){
    wrapper.classList.remove("paused");
    MainAudio.pause();
}
playpauseBtn.addEventListener("click",()=>{
    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
})
