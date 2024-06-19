// copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

// Get the last time modified of the document
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
