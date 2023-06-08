// HAMBURGER MENU VARIABLES
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".fa-x");
const menuIcon = document.querySelector(".fa-equals");
const equalsText = document.querySelector(".equals-text")

// TOGGLE MENU FUNCTION
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.replace("showMenu", "menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
    } else {
        menu.classList.replace("menu", "showMenu");
        closeIcon.style.display = "flex";
        menuIcon.style.display = "none";
    }
}

// Toggle Menu onClick
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    });

// MENU COLOR VARIABLES
const menuInverse = document.querySelectorAll(".menu-toggle");
const header = document.querySelector("header");
const teamBio = document.querySelector(".team-bio");
const spacerTwo = document.querySelector(".spacer-wide")
const festival = document.querySelector(".festival");

// OBSERVER OPTIONS
const options = {
    rootMargin: "-6% 0% -94% 0%",
};

// OBSERVER DECLARATIONS (CHANGE MENU COLOR)
// header
const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting && screen.width >= 1080) {
            menuInverse.forEach(element => {
                element.style.color = "var(--off-lite)";
                element.style.transition = "300ms";
            });
            } else {
                menuInverse.forEach(element => {
                    element.style.color = "var(--dark)";
                });
            }
        });
    }, options);

// teamBio
const bioObserver = new IntersectionObserver(function(entries, bioObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting && screen.width >= 1080) {
            menuInverse.forEach(element => {
                element.style.color = "var(--off-lite)";
                element.style.transition = "300ms";
            });
            } else {
                menuInverse.forEach(element => {
                    element.style.color = "var(--dark)";
                });
            }
        });
    }, options);

// spacerTwo
const spacerTwoObserver = new IntersectionObserver(function(entries, spacerTwoObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuInverse.forEach(element => {
                element.style.color = "var(--dark)";
            });
            } else if (!entry.isIntersecting && screen.width >= 1080) {
                menuInverse.forEach(element => {
                    element.style.color = "var(--off-lite)";
                    element.style.transition = "300ms";
                });
            }
        });
    }, options);

// festival
const festivalObserver = new IntersectionObserver(function(entries, festivalObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting && screen.width >= 1080) {
            menuInverse.forEach(element => {
                element.style.color = "var(--off-lite)";
                element.style.transition = "300ms";
            });
            } else {
                menuInverse.forEach(element => {
                    element.style.color = "var(--dark)";
                });
            }
        });
    }, options);

// OBSERVERS
headerObserver.observe(header);
bioObserver.observe(teamBio);
spacerTwoObserver.observe(spacerTwo);
festivalObserver.observe(festival);

// CHANGE MOTHER OF BLUES BUTTON TEXT (FOR MOBILE)
const motherButton = document.querySelector(".mother button");
function motherButtonText() {
    if (screen.width < 1080) {
        motherButton.textContent = "Donate";
        motherButton.style.paddingTop = "2%";
        motherButton.style.paddingBottom = "2%";
    }
}
motherButtonText();

// MENU EVENT LISTENERS
// Menu Color onLoad
function mobileMenuColor() {
    window.addEventListener("load", () => {
        if (screen.width >= 1080) {
            menuIcon.style.color = "var(--off-lite)";
        } else {
            menuIcon.style.color = "var(--dark)";
        };
    });
};
mobileMenuColor();