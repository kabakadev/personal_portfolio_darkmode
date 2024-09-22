function toggleMenu(){
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open"); 
} 
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  

  window.onload = function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("darkModeToggle").checked = true;
    }
  };
  