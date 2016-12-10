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

var date = new Date();
var dayOfMonth = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

$(document).on('turbolinks:load', function(){
  //Hide the number
  $(".number").hide();
  //Hide the image (image = also link to showpage)
  $(".allwindows a").hide();

// Loop through all li's
$(".allwindows li").each(function(index) {
  // Set the index + 1 as the buttontext
  var buttonData = index + 1;
  // Also add class and attr to disable
  var button = $("<button>" + buttonData + "</button>").addClass( "windowbutton" )
  // Disable button when date is in the past. Now only usable for 2016 -> delete year to make usable for 2017 etc.
  if ( year <= 2016 && month < 12) {
      button.attr( "disabled", true);
  } else if (buttonData > dayOfMonth) {
      button.attr( "disabled", true);
  } else {
    button.attr( "disabled", false);
  }
  // Add button to li if not already there.
    if ( !$(this).attr("windowbutton")) {
    $(this).append(button);
  }
})

  // When button clicked -> Show img.
  $("button").click(function() {
    $(this).prev().prev().show();
    $( 'li:first-child', $( this ).parents ( 'ul' ) ).html ();
  // Get rid of button
  $(this).remove();
  });

  // Make button only clickable when current date is today or in the past.

  // Get the durrent date


    // If year === 2016 && month === 12 && (get data from button) (buttonData parseInt !<= dayofMonth) disable button.
});
