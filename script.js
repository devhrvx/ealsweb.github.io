document.addEventListener('DOMContentLoaded', function() {
    var exploreBtn = document.getElementById('explore-btn');
    function scrollSmooth(y) {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    exploreBtn.addEventListener('click', function() {
        scrollSmooth(642.40);
    });
    var nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', function() {
        window.location.href = 'universe.html';
    });
});