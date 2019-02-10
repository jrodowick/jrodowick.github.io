$(function() {
  var $jumbo = $('.jumbotron');
  var $info = $('main');
  $info.hide().fadeIn(1000);
  $jumbo.hide().slideDown(1000);

});

$(function() {
  var user_pic = $('#user_pic')
  user_pic.on('mouseover', function() {
    $(this).animate({
      width: '+=35px',
      height: '+=35px',
    }, 500)
  });
  user_pic.on('mouseout', function() {
    $(this).animate({
      width: '-=35px',
      height: '-=35px',
    }, 500)
  });
});
