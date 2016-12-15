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

"use strict";

$(document).on('turbolinks:load', function(){
  //Hide the number of window
  $(".number").hide();
  //Hide the image of window (image = also link
  $(".allwindows a").hide();
  $(".allwindows li").hide().fadeIn(500);

  // set varibale for time.
  var date = new Date();
  var dayOfMonth = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();


  // Loop through all li's to add the buttons
  $(".allwindows li").each(function(index) {
    // Set the index + 1 as the buttontext
    var buttonData = index + 1;
    // Also add class and attr to disable
    var button = $("<button>" + buttonData + "</button>").addClass( "windowbutton" )
    // Disable button when date is in the past.
    if ( year <= 2016 && month < 12 || year <= 2016 && month === 12 && buttonData > dayOfMonth ) {
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

    //Give all images & li's a class
    $(".allwindows li img").attr( "class", "images");
    $(".allwindows li").attr( "class", "window");

    // Not possible, click event doesn't fire.
    // $("button").click(function() {
    //   if ($("button").attr("disabled" === true)) {
    //     alert("Be patient!");
    //   }
    // });


});
