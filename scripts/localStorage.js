document.addEventListener("DOMContentLoaded", () => {
  let reviewCounter = localStorage.getItem("reviewCounter");
  if (reviewCounter === null) {
    reviewCounter = 0;
    localStorage.setItem("reviewCounter", reviewCounter);
  }
  reviewCounter = parseInt(reviewCounter) + 1;
  localStorage.setItem("reviewCounter", reviewCounter);

  // Update the counter on the page
  const reviewCountElement = document.getElementById("reviews");
  if (reviewCountElement) {
    reviewCountElement.textContent = `Total Reviews Completed: ${reviewCounter}`;
  }
});
