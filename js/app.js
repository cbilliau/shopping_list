$(document).ready(function() {

/* Check box */
$('div.box').on('click', function()  {
  console.log($(this));
  $(this).removeClass("box").addClass("boxChecked");
});
/* Uncheck box */
$('div.boxChecked').on('click', function()  {
  $(this).removeClass("boxChecked").addClass("box");
})

});
