// Function to load content from a file into the main content area
async function loadContent(file, navId) {
  const mainContent = document.getElementById('main-content');
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error('Network response was not ok');
    const content = await response.text();
    mainContent.innerHTML = content;
    setActiveNav(navId);
  } catch (error) {
    mainContent.innerHTML = '<p class="text-red-500">Failed to load content. Please try again later.</p>';
    console.error('Error loading content:', error);
  }
}

// Function to set the active navigation link
function setActiveNav(activeId) {
  document.querySelectorAll('ul li a').forEach(link => {
    link.classList.remove('active-nav');
  });
  document.getElementById(activeId).classList.add('active-nav');
}

// Event listeners for navigation links
document.getElementById('nav-dashboard').addEventListener('click', (e) => { e.preventDefault(); loadContent('secretary/dashboard.html', 'nav-dashboard'); });
document.getElementById('nav-add-patient').addEventListener('click', (e) => { e.preventDefault(); loadContent('secretary/addPatient.html', 'nav-add-patient'); });
document.getElementById('nav-existing-patient').addEventListener('click', (e) => { e.preventDefault(); loadContent('secretary/existingPatient.html', 'nav-existing-patient'); });
document.getElementById('nav-manage-records').addEventListener('click', (e) => { e.preventDefault(); loadContent('secretary/manageRecords.html', 'nav-manage-records'); });
document.getElementById('nav-settings').addEventListener('click', (e) => { e.preventDefault(); loadContent('secretary/settings.html', 'nav-settings'); });