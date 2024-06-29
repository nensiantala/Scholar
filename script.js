$(document).ready(function() {
    let stats = $('.animated-stats p');
    let index = 0;
    
    function showNextStat() {
        stats.removeClass('active');
        $(stats[index]).addClass('active');
        index = (index + 1) % stats.length;
    }
    
    showNextStat();
    setInterval(showNextStat, 3000); // Change stat every 3 seconds
});

$(document).ready(function() {
    // Initialize with MBA courses shown by default
    showCourses('mba');

    // Dropdown item click handler
    $('.dropdown-item').on('click', function(e) {
        e.preventDefault();
        var category = $(this).data('category');
        $('#filterCategory').text($(this).text());
        showCourses(category);
    });

    // View All button click handler
    $('#viewAllBtn').on('click', function(e) {
        e.preventDefault();
        $('.course-card').fadeIn();
    });

    // Function to show courses based on selected category
    function showCourses(category) {
        $('.course-card').fadeOut(300);
        $('.course-card[data-category="' + category + '"]').fadeIn(300);
    }
});


const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
