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
    })
});
/////////////////////////////////////Search Bar//////////////////////////////////////////////// 
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