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