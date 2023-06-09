let numContainer = document.querySelector(".container");
let historyList = document.querySelector(".history-list");

function getRandomNumber() {
  return Math.floor(Math.random() * 99999);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    let newElement = document.createElement("h1");
    let newHistoryElement = document.createElement("li");

    newElement.textContent = getRandomNumber();
    newHistoryElement.textContent = newElement.textContent;
    historyList.append(newHistoryElement);
    numContainer.append(newElement);
    newElement.classList.add("new");
    let elements = document.querySelectorAll(".new");
    if (elements.length == 2) {
      elements[0].remove();
    }
  }
});
