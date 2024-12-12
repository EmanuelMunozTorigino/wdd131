const $hamMenu = document.getElementById("ham-menu");

const $nav = document.querySelector("nav");

$hamMenu.addEventListener("click", () => {
  $nav.classList.toggle("open");
  $hamMenu.classList.toggle("open");
});

const temples = [
  {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2024, june, 16",
    area: 27000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241.jpg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Cordoba Argentina",
    location: "Cordoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg",
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1994, January, 8-14",
    area: 104000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
];

const templeContainer = document.getElementById("temple-album");

const createTemple = (templeList) => {
  templeList.forEach((temple) => {
    let articleContainer = document.createElement("article");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    let area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    let templeImg = document.createElement("img");
    templeImg.setAttribute("src", temple.imageUrl);
    templeImg.setAttribute("alt", `${temple.templeName} temple`);
    templeImg.setAttribute("width", 300);
    templeImg.setAttribute("height", 200);
    templeImg.setAttribute("loading", "lazy");

    articleContainer.appendChild(templeName);
    articleContainer.appendChild(location);
    articleContainer.appendChild(dedicated);
    articleContainer.appendChild(area);

    articleContainer.appendChild(templeImg);
    templeContainer.appendChild(articleContainer);
  });
};

const resetFunction = () => (templeContainer.innerHTML = ``);

const filterHeading = document.getElementById("filter-heading");

createTemple(temples);

const oldFilter = document.getElementById("old");
oldFilter.addEventListener("click", () => {
  resetFunction();
  filterHeading.textContent = "Temples dedicated before 1900";

  createTemple(
    temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) < 1900)
  );
});

const newFilter = document.getElementById("new");
newFilter.addEventListener("click", () => {
  resetFunction();
  filterHeading.textContent = "Temples dedicated after 2000";
  createTemple(
    temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) > 2000)
  );
});

const largeFilter = document.getElementById("large");
largeFilter.addEventListener("click", () => {
  filterHeading.textContent = "Temples With an area greater than 90000 sq ft";
  resetFunction();
  createTemple(temples.filter((temple) => temple.area > 90000));
});

const smallFilter = document.getElementById("small");
smallFilter.addEventListener("click", () => {
  resetFunction();
  filterHeading.textContent = "Temples With an area less than 10000 sq ft";
  createTemple(temples.filter((temple) => temple.area < 10000));
});

const home = document.getElementById("home");

home.addEventListener("click", () => {
  resetFunction();
  filterHeading.textContent = "Home";
  createTemple(temples);
});
