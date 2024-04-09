document.addEventListener('DOMContentLoaded', function() {
    var targetCont1 = document.querySelector('.container:nth-child(2) > .container-img');
    var targetTxt1 = document.querySelector('.container:nth-child(2) > .container-txt');
    var txtArr1 = ['slide1',
    'slide2',
    'slide3',
    'slide4',
    'title'];
    var imgArr1 = ['images/1_sn.png', 'images/2_sn.png','images/3_sn.png', 'images/4_sn.png', 'images/sn_ttl.png'];
    var currentIndex1 = 3;

    function changeImages(index, images, texts, target, targetTxt) {
        index = (index+1) % images.length;
        target.style.backgroundImage = 'url(' + images[index] + ')';
        targetTxt.innerHTML = texts[index];
        return index;
    }

    targetCont1.addEventListener('click', function() {
        currentIndex1 = changeImages(currentIndex1, imgArr1, txtArr1, targetCont1, targetTxt1);
    });
    changeImages(currentIndex1, imgArr1, txtArr1, targetCont1, targetTxt1);
});