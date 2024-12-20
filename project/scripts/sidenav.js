function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  //document.getElementById("main").style.marginLeft = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("sidenavHam").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("sidenavHam").style.display = "inline";
}

const sidenavHam = document.getElementById("sidenavHam");
const closebtn = document.querySelector(".closebtn");

sidenavHam.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);

/*          Wayfinding                  */

// Select all the links from the DOM object

const navLinks = document.querySelectorAll(".nav-link");

// Add a new click event for each link..
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active function for all links
    navLinks.forEach((item) => item.classList.remove("active"));

    // Just add the active class for the clicked link
    this.classList.add("active");
  });
});
