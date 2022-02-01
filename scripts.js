var counter = 0;

document.getElementById("counter-number").innerHTML = counter;
const countNumber = document.getElementById("counter-number");

function updateCount() {
  countNumber.innerHTML = counter;
}

const starComponent = () => {
  const starImage = document.createElement("div");
  starImage.innerHTML = `
  <img class="star-image" src="./star.png" alt="star">
  `;

  starContainer.appendChild(starImage);
};

const starContainer = document.querySelector(".stars-container");

document.getElementById("counter-number").innerHTML = counter;

const removeButton = document.getElementById("remove-button");

function removeImage() {
  const starPic = document.querySelector(".star-image");

  if (counter <= 0) {
    starContainer.style.background = "red";
  }
  if (starContainer.hasChildNodes()) {
    console.log("stars" + counter);
    starContainer.removeChild(starContainer.lastElementChild);
  }
}

removeButton.addEventListener("click", () => {
  counter = counter - 1;
  updateCount();
  removeImage();
  console.log(starContainer);
});

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  if (counter >= 0) {
    starContainer.style.background = "rgba(0, 0, 0, 0.6)";
  }
  counter = counter + 1;
  updateCount();

  if (counter >= 1) {
    starComponent();
  }
});
