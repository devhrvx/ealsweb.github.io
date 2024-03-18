document.addEventListener('DOMContentLoaded', function() {
    var pics1 = ["steady-state", "milky"];
    var pics2 = ["Untitled design (2)", "steady-state"];
    var imgContent = document.querySelector("#img-content");
    var imgContent2 = document.querySelector("#img-content2");
    var box2Img = document.querySelector(".box2");
    var box3Img = document.querySelector(".box3");
    box2Img.addEventListener('click', function() {
        changeImg(imgContent, ...pics1);
    });
    box3Img.addEventListener('click', function() {
        changeImg(imgContent2, ...pics2);
    });
    function changeImg(imgCon, ...pics) {
        console.log("Box 2 clicked");
        console.log("Current image source:", imgCon.src);
        if (imgCon.src.includes(pics[0] + ".jpg")) {
            console.log("Changing image to", pics[1]);
            imgCon.src = pics[1] + ".jpg";
        } else {
            console.log("Changing image to", pics[0]);
            imgCon.src = pics[0] + ".jpg";
        }
    }
});