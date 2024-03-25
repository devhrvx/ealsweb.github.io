document.addEventListener('DOMContentLoaded', function() {

    var imageContent1 = document.querySelector('#img-content');
    var imageContent2 = document.querySelector('#img-content2');
    var currentState2 = true;
    var currentState = true;

    imageContent1.addEventListener('click', function() {
        if (currentState) {
            changePicture(imageContent1, 'images/steady-state.jpg');
        } else {
            changePicture(imageContent1, 'images/quasar.jpg');
        }
        currentState = !currentState;
    });

    imageContent2.addEventListener('click', function() {
        if (currentState2) {
            changePicture(imageContent2, 'images/milky.jpg');
        } else {
            changePicture(imageContent2, 'images/pulsate.jpg');
        }
        currentState2 = !currentState2;
    });
    function changePicture(image, newImageSrc) {
        image.src = newImageSrc;
    }
});
