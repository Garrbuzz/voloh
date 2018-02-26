

$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" ><span class="up">Нагору</span></a>');

});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});
// =================Модальне вікно питання=========================
// function quest(){
//   document.getElementById('q').style.display="block";
// }
// function sendQuestion(){
//   var patternEmail=/\w+@\w+\.\w+/;
//   var userName = document.getElementById('user-name').value;
//   var userMail = document.getElementById('user-mail').value;
//   if (!patternEmail.test(userMail)){
//     alert('boolshit');

//    };
//   var messageText = document.getElementById('message-text').value;
//   var body = "userName=" + encodeURIComponent(userName) + "&userMail=" + encodeURIComponent(userMail) + "&messageText=" + encodeURIComponent(messageText);
//   var xhr = new XMLHttpRequest();
//   alert (body);
//   xhr.open("POST", "../php/sendmessage.php", true);
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   xhr.send(body);
//   xhr.onreadystatechange = function(){
//     if (xhr.readyState===4) {
//       var result = JSON.parse(xhr.responseText);
//       alert(result);
//     }

//   };

//   document.getElementById('q').style.display="none";

// }
// function canselQuestion(){
//   document.getElementById('q').style.display="none";
// }
// =================Модальне вікно питання кінець=========================
// =================Питання=========================


function quest(){
  document.getElementById('question').style.display="block";
}
function sendQuestion(){
  var patternEmail=/\w+@\w+\.\w+/;
  var userName = document.getElementById('user-name').value;
  var userMail = document.getElementById('user-mail').value;
  if (!patternEmail.test(userMail)){
    alert('boolshit');

   };
  var messageText = document.getElementById('message-text').value;
  var body = "userName=" + encodeURIComponent(userName) + "&userMail=" + encodeURIComponent(userMail) + "&messageText=" + encodeURIComponent(messageText);
  var xhr = new XMLHttpRequest();
  alert (body);
  xhr.open("POST", "../php/sendmessage.php", true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(body);
  xhr.onreadystatechange = function(){
    if (xhr.readyState===4) {
      var result = JSON.parse(xhr.responseText);
      alert(result);
    }

  };

  document.getElementById('q').style.display="none";

}
function canselQuestion(){
  document.getElementById('q').style.display="none";
}
// =================Питання кінець=========================


