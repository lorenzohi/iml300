$(document).ready(function () {
     $('.plant').click(function(){
        $('.para').toggle();
     });
 
      $('#key').click(function () {  
          $(this).toggleClass("smaller");
    });
    $(function () {
        $(".plant").draggable();
    });  
  
});
