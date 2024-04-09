document.addEventListener('DOMContentLoaded', function() {
    var targetCont1 = document.querySelector('.container:nth-child(2) > .container-img');
    var targetTxt1 = document.querySelector('.container:nth-child(2) > .container-txt');
    var txtArr1 = ['In this scenario, a rogue star passes close to the Sun about 5 billion years ago.',
    'The material in the form of hot gas, is tidally stripped from the Sun and the rouge star because of gravity.',
    'The material is then ripped and ejected into space, rogue star material is less dense and becomes outer Solar System planets, while the Sun material is more dense and becomes inner terrestrial Solar System planets.',
    'The ejected material floated and collided within self-gravity contraction into space forming a disk around the Sun. This disk is the precursor to the planets.<br>However, there are two major problems for a theory of this type. One is that hot gas expands, not contracts. So lumps of hot gas would not form planets. The second is that encounters between stars are extremely rare, so rare as to be improbable in the lifetime of the Universe',
    'The Encounter Hypothesis one of the earliest theory of the formation of the planets was called the encounter hypothesis'];
    var imgArr1 = ['images/1_enc.png', 'images/2_enc.png','images/3_enc.png', 'images/4_enc.png', 'images/enc_ttl.png'];
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