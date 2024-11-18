// Toggle navigation visibility on mobile
const toggleNav = document.getElementById('toggle-nav');
const closeNav = document.getElementById('close-nav');
const sideNav = document.getElementById('side-nav');

toggleNav.addEventListener('click', function() {
  sideNav.classList.toggle('-translate-x-full');
});

closeNav.addEventListener('click', function() {
  sideNav.classList.add('-translate-x-full');
});