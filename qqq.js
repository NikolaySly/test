
var previousScrollPosition = 0;
var q = document.querySelector('.q');
var w = document.querySelector('.w');
var e = document.querySelector('.e');


window.addEventListener('scroll', trackScroll);
function trackScroll() {
    let scroll = window.pageYOffset;
    if (scroll > previousScrollPosition) {
            q.classList.toggle('.active');
            w.classList.toggle('.active');
            e.classList.toggle('.active');
  }
}