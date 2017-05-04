/*global $*/
$(document).ready(function() {
    var menuAtivo = false;
    $("#btnMenuLink").click(function() {
        if (menuAtivo) {
            $("#menuResponsivo").removeClass('fadeInLeft');
            $("#menuResponsivo").addClass('fadeOutRight');
            
            setTimeout(function() {
                $("#menuResponsivo").addClass('oculto');
            }, 400);
            
            $("#btnMenuLink").html('<i class="fa fa-bars" aria-hidden="true"></i>');
            
            menuAtivo = false;
        }
        else {
            $("#menuResponsivo").removeClass('fadeOutRight');
            $("#menuResponsivo").addClass('fadeInLeft');
            
            $("#menuResponsivo").removeClass('oculto');
            
            $("#btnMenuLink").html('<i class="fa fa-times" aria-hidden="true"></i>');
            
            menuAtivo = true;
        }
    });
});
/*


        $("#menuResponsivo").toggleClass('oculto');
        $("#menuResponsivo").addClass('animated');
        $("#menuResponsivo").addClass('fadeInDown');


*/
