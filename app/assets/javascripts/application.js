// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).on('turbolinks:load', function(){
  //Hide first window
  $(".number").hide();
  $(".allwindows a").hide();
  // Add a button with the date
//
// $(".number").each(function() {
//     var data = console.log(($(this).text()));
//       // $("data").each(function() {
//       //   console.log();
  //     //     })
//   // })
// var buttonData = $(".allwindows li p").each(function() {
//   console.log($(this).text());
// })

// $("buttonData").each(function(){
//
// })
// .html();
// // var buttonData =
$(".allwindows li").each(function() {
  var buttonData = $(this).text();
  var button = $("<button>" + buttonData + "</button>").addClass( "windowbutton" );
  $(this).append(button);
})



  // When button clicked -> Show img.
  $("button").click(function() {
    $(this).prev().prev().show();
    $( 'li:first-child', $( this ).parents ( 'ul' ) ).html ();
  // get rid of button
  $(this).remove();
  });
});
