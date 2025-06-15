function toggleNavDropdown(trigger) {
    // Close all others
    document.querySelectorAll(".nav_dropdown").forEach(drop => {
      if (drop.contains(trigger)) {
        drop.classList.toggle("-open");
      } else {
        drop.classList.remove("-open");
      }
    });
}

  // Close dropdowns if clicked outside
document.addEventListener("click", e => {
    const isDropdownClick = e.target.closest(".nav_dropdown");
    if (!isDropdownClick) {
      document.querySelectorAll(".nav_dropdown").forEach(drop => drop.classList.remove("-open"));
    }
});


// Mobile
function toggleMobileMenu() {
    document.getElementById("mobile_menu").classList.toggle("open");
}

function toggleDropdown(id) {
    const el = document.getElementById(id);
    el.classList.toggle("open");
}