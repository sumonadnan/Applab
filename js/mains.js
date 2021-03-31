$(document).ready(function(){
    $('.btn-3').addClass('select');
    $('.price-table-1').addClass('table-select');

  $('.btn-3').click(function(){
  	$('.btn-3').addClass('select');
  	$('.btn-4').removeClass('select');
  	$('.price-table-1').addClass('table-select');
  	$('.price-table-2').removeClass('table-select');
  });
  $('.btn-4').click(function(){
  	$('.btn-3').removeClass('select');
  	$('.btn-4').addClass('select');
  	$('.price-table-1').removeClass('table-select');
  	$('.price-table-2').addClass('table-select');
  });
});
$(document).ready(function(){
      $("#annually").click(function(){
            $("#annually").addClass("pricing_active");
            $("#annually").removeClass("pricing_inactive");
            $("#monthly").addClass("pricing_inactive");
            $("#monthly").removeClass("pricing_active");


            $("#anl").addClass("zoomin");
            $("#anl").removeClass("zoomout");

            $("#mnt").removeClass("zoomin");
            $("#mnt").addClass("zoomout");

          });
          $('.accordion-button').click(function() { 
            $(this).find('i').toggleClass('fa fa-plus fas fa-minus'); 
        }); 
});
