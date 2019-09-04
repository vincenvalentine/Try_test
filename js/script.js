// $(document).ready(function(){
//     $('#btn-notif').click(function(){
//       $('#notif').hide();
//     });
// });


// $(document).ready(function(){
//   $('.close').click(function(){
//     $('#ads').hide();
//   });
// });


$( '#btn-notif' ).click(function() {
    $( '#notif' ).slideUp(500);
  
});

// btn-ads

$( '#btn-close' ).click(function() {
  $( '#ads' ).slideToggle(800);
});

$("#btn-close").on("click", function(){
  setTimeout(function(){
    $('#ads').slideToggle();
  }, 10000)
});