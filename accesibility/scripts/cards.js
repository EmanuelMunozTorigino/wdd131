const videos = [
  {
    name: "Extraordinary Gift",
    description:
      "story of Kuha'o 'extraordinary gift in Hawaian', a blind 15-year-old piano prodigy who shares his God-given musical talent to bless the lives of everyone who listens",
    url: "https://www.youtube.com/watch?v=6IOxt1Z3pDk&t=190s",
    img: "images/extraordinary-gift.webp",
  },
  {
    name: "We're The Superhumans",
    description:
      "The title -We're The Superhumans- reflects the extraordinary determination, resilience, and abilities of Paralympic athletes and individuals with disabilities",
    url: "https://www.youtube.com/watch?v=IocLkk3aYlk&t=10s",
    img: "images/super-heroes.webp",
  },
];

const $videoContainer = document.getElementById("videosContainer");

const displayVideos = (videos) => {
  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.setAttribute("class", "card-providers");
    videoCard.setAttribute("loading", "lazy");

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "background-div");
    imageDiv.style.backgroundImage = `url(${video.img})`;

    videoCard.appendChild(imageDiv);

    let videoDetailsButton = document.createElement("a");
    videoDetailsButton.setAttribute("class", "provider-info-button");
    videoDetailsButton.setAttribute("href", `${video.url}`);
    videoDetailsButton.textContent = `Watch Video`;
    videoDetailsButton.target = `_blank`;

    const countryDetails = document.createElement("div");

    countryDetails.setAttribute("class", "info-providers");

    countryDetails.innerHTML = `
      <h2>${video.name}</h2>
      <p>${video.description}</p>`;

    countryDetails.appendChild(videoDetailsButton);
    videoCard.appendChild(countryDetails);
    $videoContainer.appendChild(videoCard);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayVideos(videos);
});
