// Alert-header

$( '#btn-notif' ).click(function() {
    $( '#notif' ).slideUp(500);
  
});

// ads-bottom

$( '#btn-close' ).click(function() {
  $( '#ads' ).slideToggle(800);
});

$("#btn-close").on("click", function(){
  setTimeout(function(){
    $('#ads').slideToggle();
  }, 30000)
});