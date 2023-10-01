const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselList = document.getElementById("carouselList");
const items = carouselList.getElementsByTagName("li");

let currentIndex = 0;

function showItem(index) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  items[index].style.display = "block";
}

function moveToNextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function moveToPrevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

prevButton.addEventListener("click", moveToPrevItem);
nextButton.addEventListener("click", moveToNextItem);

showItem(currentIndex); // Mostrar el primer elemento al cargar la página
