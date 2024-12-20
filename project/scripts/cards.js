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

    const storedData = JSON.parse(localStorage.getItem(video.name)) || {
      likes: 0,
      dislikes: 0,
    };

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.justifyContent = "space-around";
    buttonsContainer.style.margin = ".5rem";

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.innerHTML = `<img src="images/like.png" alt="Like" loading="lazy" style="width: 16px;">`;

    const likeCount = document.createElement("p");
    likeCount.textContent = `${storedData.likes} Likes `;
    likeCount.style.marginLeft = "10px";

    likeButton.addEventListener("click", () => {
      storedData.likes += 1;
      likeCount.textContent = `Likes: ${storedData.likes}`;
      localStorage.setItem(video.name, JSON.stringify(storedData));
    });

    const dislikeButton = document.createElement("button");
    dislikeButton.classList.add("dislike-button");
    dislikeButton.innerHTML = `<img src="images/dislike.webp" alt="Dislike" loading="lazy" style="width: 16px;">`;

    const dislikeCount = document.createElement("p");
    dislikeCount.textContent = `${storedData.dislikes} Dislikes `;
    dislikeCount.style.marginLeft = "10px";

    dislikeButton.addEventListener("click", () => {
      storedData.dislikes += 1;
      dislikeCount.textContent = `Dislikes: ${storedData.dislikes}`;
      localStorage.setItem(video.name, JSON.stringify(storedData));
    });

    const likeContainer = document.createElement("div");
    likeContainer.style.display = "flex";
    likeContainer.style.alignItems = "center";
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);

    const dislikeContainer = document.createElement("div");
    dislikeContainer.style.display = "flex";
    dislikeContainer.style.alignItems = "center";
    dislikeContainer.appendChild(dislikeButton);
    dislikeContainer.appendChild(dislikeCount);

    buttonsContainer.appendChild(likeContainer);
    buttonsContainer.appendChild(dislikeContainer);

    countryDetails.appendChild(videoDetailsButton);
    videoCard.appendChild(countryDetails);
    videoCard.appendChild(buttonsContainer);
    $videoContainer.appendChild(videoCard);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayVideos(videos);
});
