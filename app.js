const hero = document.querySelector(".hero");
const cover = document.querySelector(".cover");
const slider = document.querySelector(".slider");
const home = document.querySelector("#home");
const connect = document.querySelector("#connect");
const products = document.querySelector("#products");
const order = document.querySelector("#order");
const headline = document.querySelector(".headline");



window.onload = function () {
    var JSShowContent = function JSShowContent() {
        var content = document.getElementById('content');
        content.style.display = 'block';
    }, JSHideOverlay = function JSHideOverlay () {
        var overlay = document.getElementById('overlay'),
            opacity = 1,
            interval = 0,
            rate = 5; //rate is in milliseconds
        overlay.style.opacity = opacity; //set initial opacity as it defaults to ""
        interval = window.setInterval(function () {
            opacity -= 0.01; //decrement opacity
            overlay.style.opacity = opacity;
            if (opacity <= 0) {
                window.clearInterval(interval);
                overlay.style.display = 'none';
                JSShowContent();
            }
        } , rate);
    };
    //after 3000 milliseconds (=3 seconds), call the hideOverlay function
    window.setTimeout(JSHideOverlay, 3000);
};
const tl = new TimelineMax();


tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut }, "+=3.2")
.fromTo(hero,1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut },)
.fromTo(slider,1.2, {x: "100%"}, {x: "0%", ease: Power2.easeInOut }, "-= 1.2")
.fromTo(home,  0.5, {opacity: 0, x: 40}, {opacity: 1, x: 0 }, "-=1.2")
.fromTo(products,  0.5, {opacity: 0, x: 60}, {opacity: 1, x: 0 }, "-=1.2")
.fromTo(order,  0.5, {opacity: 0, x: 80}, {opacity: 1, x: 0 }, "-=1.2")
.fromTo(connect,  0.5, {opacity: 0, x: 100}, {opacity: 1, x: 0 }, "-=1.2")



