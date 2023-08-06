function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show')
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  this.classList.toggle("buy-border");
});

var btnsub = document.getElementById("button-style");
btnsub.addEventListener("click", function() {
  this.classList.toggle("button-background");
});

// button.onmouseover = main.onmouseout = handler;

var button = document.querySelector(".body-middle__item");
const main = document.querySelector(".main");

function background(color) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  if (color.type == 'mouseover') {
    main.target.style.filter = 'brightness(0.5)'
  }
}

function background(none) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  if (button.type == 'mouseout') {
    main.target.style.filter = 'brightness(1)'
  }
}

// function button(color) {
//   main.style.background = "#999";
// };

// button().addEventListener("click", function() {
//   main.classList.toggle("color");
// });