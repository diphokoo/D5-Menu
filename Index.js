document.addEventListener("DOMContentLoaded", function () {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
            });
        }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const navLinks = document.querySelectorAll('.nav_link'),
        secondaryNavs = document.querySelectorAll('.secondary-navbar'),
        selectedName = document.getElementById('selected-name'),
        darkModeToggle = document.getElementById('dark-mode'),
        body = document.getElementById('body-pd');

    // Handle nav link clicks and toggle secondary nav
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.stopPropagation();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const navName = this.querySelector('.nav_name').innerText;
            selectedName.innerText = navName;

            const targetNav = link.getAttribute('data-target');
            secondaryNavs.forEach(nav => {
                nav.classList.toggle('open', nav.id === targetNav);
            });
        });
    });

    // Close secondary nav when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.secondary-navbar') && !event.target.closest('.nav_link')) {
            secondaryNavs.forEach(nav => nav.classList.remove('open'));
        }
    });

    // Enable dark mode
    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode'); // Enable dark mode
        } else {
            body.classList.remove('dark-mode'); // Disable dark mode
        }
    });
});
