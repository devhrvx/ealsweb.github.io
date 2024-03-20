document.addEventListener('DOMContentLoaded', function() {

    var imageContent1 = document.querySelector('#img-content');
    var imageContent2 = document.querySelector('#img-content2');
    var currentState = true;

    imageContent1.addEventListener('click', function() {
        if (currentState) {
            changePicture(imageContent1, 'steady-state.jpg');
        } else {
            changePicture(imageContent1, 'milky.jpg');
        }
        currentState = !currentState;
    });

    imageContent2.addEventListener('click', function() {
        if (currentState) {
            changePicture(imageContent2, 'Untitled design (2).png');
        } else {
            changePicture(imageContent2, 'milky.jpg');
        }
        currentState = !currentState;
    });

    function changePicture(image, newImageSrc) {
        image.src = newImageSrc;
    }
});
