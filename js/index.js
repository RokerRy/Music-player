$(document).ready(function(){
    $("#signup-section").hide();
    $("#signupbutton").click(function()
    {
        $("#login-section").fadeOut();
        setTimeout(function(){
            $("#signup-section").fadeIn();
        },400);
    });
    var myModalEl = document.getElementById('modalform')
    myModalEl.addEventListener('hidden.bs.modal', function (){
        $("#login-section").show();
        $("#signup-section").hide();
    })
});