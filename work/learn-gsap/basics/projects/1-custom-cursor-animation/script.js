var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

// Initially hide cursor
cursor.style.opacity = 0;

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.1,
        // ease:"back.out"
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML="view more";
    gsap.to(cursor, {
        opacity: 1,
        scale:4,
        backgroundColor: "#ffffff8a"
    });
    main.classList.add("hide-native-cursor");  // Hide system cursor
});
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML="";
    gsap.to(cursor, {
        scale:1,
        opacity:0,
        backgroundColor: "#fff"
    });
    main.classList.remove("hide-native-cursor");  // Show system cursor again
});