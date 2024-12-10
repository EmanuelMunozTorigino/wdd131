// copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
