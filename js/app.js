$(document).ready(function() {

  // Check box
  $('.itemsList').on('click', '.box', function()  {
    $(this).removeClass("box").addClass("boxChecked");
    $(this).siblings('span').addClass('strikethrough');
  });
  // Uncheck box
  $('.itemsList').on('click', '.boxChecked', function()  {
    $(this).removeClass("boxChecked").addClass("box");
    $(this).siblings('span').removeClass('strikethrough');
  });

  // Add new item to shopping list
    // Add button event listener
    // Get value out of input field
    // Remove value from input field
    // Append list item - ul.itemslist > li.item
  $('#addItem').on('click', function(event){
    event.preventDefault();
    var newItem = $('#inputBox').val();
    $('#inputBox').val('');
    $('.itemsList').append(
      '<li class="item">' +
      '  <div class="box"></div>' +
      '  <span>' + newItem + '</span>' +
      '  <img src="images/remove.png" alt="remove" class="remove">' +
      '</li>'
    );
  });

  // On mouseover, delete button appears
    // Ensure delete button appears on new items

  $('.itemsList')
    .on('mouseover', 'li', function(){
      $(this).children('img').removeClass('remove').addClass('removeShow');
    })
    .on('mouseleave', 'li', function(){
      $(this).children('img').removeClass('removeShow').addClass('remove');
    });

  // Delete an item from list
    // Add delete button event listener
    // On delete button click, remove li.item
  $('.itemsList').on('click', '.removeShow', function() {
    console.log(this);
    $(this).parent('li').remove(); // Does (this) refer to '.removeShow' or 'itemsList'?
  });

  // Filter button to hide checked items
    // Add sort button event listener
    // On button click hide checked items
    // On button click hide .hide button and show .show button
  $('.sort').on('click', '#hideButton', function() {
    // console.log(this);
    var hideChecked = $('li').children('.boxChecked');
    $(hideChecked).parent('li').hide();
    $('#hideButton').hide();
    $('#showButton').show();
  });
  // Filter button to show checked Items
  $('.sort').on('click', '#showButton', function() {
    var showChecked = $('li').children('.boxChecked');
    $(showChecked).parent('li').show();
    $('#showButton').hide();
    $('#hideButton').show();
  });


});
