/*global $*/
$(document).ready(function() {
    var menuAtivo = false;
    $("#btnMenuLink").click(function() {
        if (menuAtivo) {
            $("#menuResponsivo").removeClass('bounceIn');
            $("#menuResponsivo").addClass('bounceOut');
            
            setTimeout(function() {
                $("#menuResponsivo").addClass('hidden');
            }, 500);
            
            $("#btnMenuLink").html('<i class="fa fa-bars" aria-hidden="true"></i>');
            
            menuAtivo = false;
        }
        else {
            $("#menuResponsivo").removeClass('bounceOut');
            $("#menuResponsivo").addClass('bounceIn');
            
            $("#menuResponsivo").removeClass('hidden');
            
            $("#btnMenuLink").html('<i class="fa fa-times" aria-hidden="true"></i>');
            
            menuAtivo = true;
        }
    });
});
