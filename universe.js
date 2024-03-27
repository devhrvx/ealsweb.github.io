document.addEventListener('DOMContentLoaded', function() {

    var imageContent1 = document.querySelector('#img-content');
    var imageContent2 = document.querySelector('#img-content2');
    var imageContent3 = document.querySelector('#img-content3');
    var currentState2 = true;
    var currentState = true;
    var currentState3 = true;

    imageContent3.addEventListener('click', function() {
        if (currentState3) {
            changePicture(imageContent3, 'images/big.png');
        } else {
            changePicture(imageContent3, 'images/bang.jpg');
        }
        currentState3 = !currentState3;
    });

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
