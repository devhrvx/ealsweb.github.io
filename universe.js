document.addEventListener('DOMContentLoaded', function() {
    var pics = ["steady-state", "milky"];
    var imgContent = document.querySelector("#img-content");
    var box2Img = document.querySelector(".box2");
    box2Img.addEventListener('click', function() {
        console.log("Box 2 clicked");
        console.log("Current image source:", imgContent.src);
        if (imgContent.src.includes(pics[0] + ".jpg")) {
            console.log("Changing image to", pics[1]);
            imgContent.src = pics[1] + ".jpg";
        } else {
            console.log("Changing image to", pics[0]);
            imgContent.src = pics[0] + ".jpg";
        }
    });
});