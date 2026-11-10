let skeletonYValue = 0;
const skeleton = document.getElementById("skeleton");

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowDown':
            console.log(skeleton.style.bottom);
            skeletonYValue += 10;
            skeleton.style.top = skeletonYValue + 'px';
            document.getElementById("directionsBox").style.opacity = 0;
            document.getElementById("directions1").style.opacity = 0;
            document.getElementById("directions2").style.opacity = 0;

            break;
        case 'ArrowUp':
            console.log(skeleton.style.bottom);
            skeletonYValue -= 10;
            skeleton.style.top = skeletonYValue + 'px';
            document.getElementById("directionsBox").style.opacity = 0;
            document.getElementById("directions1").style.opacity = 0;
            document.getElementById("directions2").style.opacity = 0;
            break;
    }});