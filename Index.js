document.addEventListener("DOMContentLoaded", function(event) {
    const navLinks = document.querySelectorAll('.nav_link');
    const secondaryNavs = document.querySelectorAll('.secondary-navbar');
    const body = document.getElementById('body-pd');

    // Function to toggle the visibility of secondary nav
    function toggleSecondaryNav(navId) {
        secondaryNavs.forEach(nav => {
            if (nav.id === navId) {
                nav.classList.toggle('open');
            } else {
                nav.classList.remove('open');
            }
        });
    }

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents click event from propagating to the body
            const targetNav = link.getAttribute('data-target');
            toggleSecondaryNav(targetNav);
        });
    });

    // Close secondary nav when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.secondary-navbar') && !event.target.closest('.nav_link')) {
            secondaryNavs.forEach(nav => nav.classList.remove('open'));
        }
    });
});


            // Get all navigation links
            const navLinks = document.querySelectorAll('.nav_link');
            const selectedName = document.getElementById('selected-name');
    
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
    
                    // Add active class to the clicked link
                    this.classList.add('active');
    
                    // Change the selected name based on the clicked link
                    const navName = this.querySelector('.nav_name').innerText; // Get the text of the nav_name span
                    selectedName.innerText = navName; // Update the selected name in the header
                });
            });


            