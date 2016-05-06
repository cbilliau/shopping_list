$(document).ready(function() {

  /* Check box */
  $(document).on('click', '.box', function()  {
    $(this).removeClass("box").addClass("boxChecked");
  });
  /* Uncheck box */
  $(document).on('click', '.boxChecked', function()  {
    $(this).removeClass("boxChecked").addClass("box");
  });

});
