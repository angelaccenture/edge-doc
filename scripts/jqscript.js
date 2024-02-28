$(document).ready(function() {
    console.log("test");
    $('#myselector').change(function(){
      $('.statecontent').hide();
      $('#' + $(this).val()).show();    
    });
    });