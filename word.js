const words = [
  "我知道现在是时候。",
  "但这并不能阻止我们心存感激。",
  "我很感激今年收到的所有祝福。",
  "感谢一路走来的挑战。",
  "我感谢所有的爱。",
  "我圣诞节不要太多。我只想让读这篇文章的人感到被爱。",
  "愿你得到你想要的一切，让你的家庭和生活充满幸福。",
  "圣诞快乐！",
    1123445
];
let i = 0;
let timer;
// speed in ms
let deleteDelay = 3000;
let typeSpeed = 100;
let delSpeed = 50;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      delay(function () {
        deletingEffect(); // do stuff
      }, deleteDelay); // end delay
      // deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, typeSpeed);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      }
      // else {
      //   i = 0;
      // }
      typingEffect();
      return false;
    }

    timer = setTimeout(loopDeleting, delSpeed);
  };

  loopDeleting();
}

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();


$(function(){
  typingEffect();
})
