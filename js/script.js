

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



function quest(site){
  let content = '<div class="questions"><div id="qqdiv"><p>Ваше ім\'я:</p><input type="text" id="user-name"></div><div id="qqdiv"><p>Ваша поштова скринька:</p><input type="email" id="user-mail"></div><div id="qqdiv"><p>Ваше питання:</p><textarea class="ta" id="message-text"></textarea></div><div class="but-q"><button class="questions-button-ok" onclick="sendQuestion(';
  content = content + '\''+site + '\'';

  content = content + ')">Відправити</button><button class="questions-button-cancel" onclick="questCansel()">Скасувати</button></div></div>';
 if (site === 'index'){
    document.getElementById('indx').innerHTML = content;
 } else{

    document.getElementById('nat-cont').innerHTML = content;
 }


  
}
function questCansel(){
  location.reload();
}
function sendQuestion(site){
  var patternEmail=/\w+@\w+\.\w+/;
  var userName = document.getElementById('user-name').value;
  var userMail = document.getElementById('user-mail').value;
  if (!patternEmail.test(userMail)){
    alert('Невірний формат адреси електронної пошти');

   };
  var messageText = document.getElementById('message-text').value;
  var body = "userName=" + encodeURIComponent(userName) + "&userMail=" + encodeURIComponent(userMail) + "&messageText=" + encodeURIComponent(messageText);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/sendmessage.php", true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(body);
  xhr.onreadystatechange = function(){
    if (xhr.readyState===4) {
      var result = JSON.parse(xhr.responseText);
  }

  };
location.reload();
  

}
function canselQuestion(){
  document.getElementById('q').style.display="none";
}
// =================Питання кінець=========================


