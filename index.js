// function checkUsername() {
//   if(this.value.length < 5) {
//     elMsg.className = 'warning';
//     elMsg.textContent = 'Not long enough yet...';
//   }
//   else {
//     elMsg.textContent = 'Username ok!';
//   }
// }
//
// function tipUsername() {
//   elMsg.className = 'tip';
//   elMsg.textContent = 'Username must be at least 5 characters';
// }
//
// var el = document.getElementById('username')
// var elMsg = document.getElementById('feedback')
//
// el.addEventListener('focus', tipUsername, false);
// el.addEventListener('blur', checkUsername, false);

// $(function() {
//   $('h2').hide().slideDown('slow');
//   var $li = $('li');
//   $li.hide().each(function(index) {
//     $(this).delay(700 * index).fadeIn(700);
//   });
//   $li.on('click', function() {
//     $(this).fadeOut(700, function() {
//       $(this).remove();
//     });
//   //  $(this).remove();
//   });
// });

$(function() {
  var $jumbo = $('.jumbotron');
  var $info = $('#personal_info');
  $info.hide().fadeIn(1000);
  $jumbo.hide().slideDown(1000);

});

// $(function() {
//   var listItem, itemStats, eventType;
//
//   $('ul').on(
//     'click mouseover',
//     ':not(#four)',
//     {status:'important'},
//     function(e) {
//       listItem = 'Item: ' + e.target.textContent + '<br />';
//       itemStatus = 'Status: ' + e.data.status + '<br />';
//       eventType = 'Event: ' + e.type;
//       $('#notes').html(listItem + itemStatus + eventType);
//     }
//   );
// });

// $(function() {
//   $('ul').on('click', 'li',function(e) {
//     $(this).animate({
//       opacity: 0.0,
//       paddingLeft: '+=80'
//     }, 500, function() {
//       $(this).remove();
//       $('#notes').text(
//         'You removed ' +
//         e.target.textContent +
//         ' with a ' +
//         e.type)
//     });
//   });
// });



$(function() {
  var user_pic = $('img')
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
