const imgDiv = document.querySelector("#s-two-img-container");
const imgDiv2 = document.querySelector("#s-four-img-container");

const ltImg = document.querySelector("#s-six-left-top-img");
const lbImg = document.querySelector("#s-six-left-bottom-img");
const rtImg = document.querySelector("#s-six-right-top-img");
const rbImg = document.querySelector("#s-six-right-bottom-img");

// window.addEventListener("scroll", function() {
//     console.log(window.scrollY);

//     let offsetY = window.scrollY;

//     imgDiv.style.backgroundPositionY = `${offsetY * 0.3}px`;
//     imgDiv2.style.backgroundPositionY = `${offsetY * 0.3}px`;
//     ltImg.style.backgroundPositionY = `${offsetY * 0.2}px`;
//     rtImg.style.backgroundPositionY = `${offsetY * 0.2}px`;
//     lbImg.style.backgroundPositionY = `${offsetY * 0.2}px`;
//     rbImg.style.backgroundPositionY = `${offsetY * 0.5}px`;
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true,
    mobile: true,
    tablet: true,
    smartphone: {
        smooth: true
    }
});