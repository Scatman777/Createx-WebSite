// $(document).ready(function () {
//   $('.sliders').slick({
//     dots: true,
//     infinite: true,
//     speed: 1300,
//     slidesToShow: 1,
//     variableWidth: true,
//     easing: 'ease',
//     autoplay: true,
//     autoplaySpeed: 1500,
//     pauseOnHover: false,
//     draggable: false
//   });
// });

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