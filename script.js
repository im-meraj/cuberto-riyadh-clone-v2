
const scroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true,
    smartphone: {
        smooth: true,
        multiplier: 1.5
    },
    tablet: {
        smooth: true,
        multiplier: 1.5
    }
});