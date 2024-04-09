document.addEventListener('DOMContentLoaded', function() {
    var targetCont1 = document.querySelector('.container:nth-child(2) > .container-img');
    var targetTxt1 = document.querySelector('.container:nth-child(2) > .container-txt');
    var txtArr1 = ['The encounter resulted in the ripping off of materials to both the sun and the rogue star because of gravity.'
    , 'Help me please 🥀🥀🥀', 'The Encounter Hypothesis one of the earliest theory of the formation of the planets was called the encounter hypothesis. \n\nIn this scenario of a rogue star passes close to the Sun about 5 billion years ago. The material in the form of hot gas, is tidally stripped from the Sun and the rouge star because of gravity.\n\nHere we can see the depiction of the encounter.'];
    var imgArr1 = ['images/2_enc.png', 'images/3_enc.png', 'images/1_enc.png'];
    var currentIndex1 = 1;


    function changeImages(index, images, texts, target, targetTxt) {
        index = (index+1) % images.length;
        target.style.backgroundImage = 'url(' + images[index] + ')';
        targetTxt.textContent = texts[index];
        return index;
    }

    targetCont1.addEventListener('click', function() {
        currentIndex1 = changeImages(currentIndex1, imgArr1, txtArr1, targetCont1, targetTxt1);
    });
    changeImages(currentIndex1, imgArr1, txtArr1, targetCont1, targetTxt1);

});