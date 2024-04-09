document.addEventListener('DOMContentLoaded', function() {
    var targetCont1 = document.querySelector('.container:nth-child(2) > .container-img');
    var targetTxt1 = document.querySelector('.container:nth-child(2) > .container-txt');
    var txtArr1 = ['This theory states that our solar system formed 4.5 billion years ago from a dense cloud of interstellar gas and dust. The Solar Nebular theory suggests that the solar system\'s planets and the Sun were formed from the solar nebula, a cloud of interstellar gas and dust.',
    'At the center, gravity pulled more and more material in. Eventually, the pressure in the core was so great that hydrogen atoms began to combine and form helium, releasing a tremendous amount of energy. With that, our Sun was born, and it eventually amassed more than 99% of the available matter.',
    'The order of planets in our solar system is influenced by its formation. Over the years, the center of the disk became denser and hotter, eventually igniting nuclear fusion to form the Sun. ',
    'As time passed, the remaining material in the disk coalesced into the planets, moons, asteroids, and comets that populate our solar system today.',
    'The Solar Nebular Theory is the scientific theory for how the Sun and planets form from molecular clouds and their own gravity. The majority of the material within the giant molecular cloud that formed our solar system consisted of hydrogen and helium produced at the time of the big bang.'];
    var imgArr1 = ['images/1_sn.png', 'images/2_sn.png','images/3_sn.jpg', 'images/4_sn.png', 'images/sn_ttl.png'];
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