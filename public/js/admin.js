$(document).ready(function() {
  $('nav .items ul').hide();
  $('nav .items').each(function() {
    if($(this).children('ul').length) {
      $(this).find('.title').prepend('<i class="icon indicator ion-ios-arrow-right"></i>');
    }
  });
  $('nav .items .title').on('click', function() {
    $(this).find('.indicator').toggleClass('turned');
    $(this).next('ul').slideToggle(300);
  });
});
