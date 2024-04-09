document.addEventListener('DOMContentLoaded', function() {
    var targetCont1 = document.querySelector('.container:nth-child(2) > .container-img');
    var targetTxt1 = document.querySelector('.container:nth-child(2) > .container-txt');
    var txtArr1 = ['The Solar System has a huge cloud of gas and dust called a Solar Nebula. This is very huge, about 10,000 million kilometers wide, this cloud has been around for about 5 billion years.',
    'The cloud is made up of gasses and ice-covered dust particles that started to collapse because of its own gravity. As this collapses, it begins to spin faster, like when a whirlpool forms as water drains. In the middle of this collapsing cloud, the center got very hot and dense and due to the squeezing effectbecause of gravity gradually led to the nuclear fusion of hydrogen atoms.<br>This ignited the embryo Sun that is covered in gas cloud and dust particles, started the process of stellar fusion.',
    'About 10% of material in the collapsing cloud formed into a flat disk around our Sun, the disk is called the protoplanetary disk, and it was made up from gas and dust. Within this disk, collisions and gravitational interactions led to the formation of larger clumps of material called protoplanets.',
    'The protoplanets were the planets we see today from the outside of our World , like Mars, Jupiter, and others. Not all the material in the protoplanetary disk was incorporated into planets, some of it remained as smaller bodies like comets and asteroids.',
    'The protoplanet hypothesis suggests that a great cloud of gas and dust of at least 10,000 million kilometers in diameter rotated slowly in space about 5,000 million years ago.'];
    var imgArr1 = ['images/1_pro.png', 'images/2_pro.png','images/3_pro.png', '', 'images/pro_ttl.png'];
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