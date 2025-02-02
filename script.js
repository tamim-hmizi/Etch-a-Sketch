const container = document.querySelector(".container");
const btn = document.querySelector("#newGrid");

let isMouseDown = false;

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.style.filter = "brightness(100%)";

    cell.addEventListener("mousedown", () => {
      isMouseDown = true;
      changeColor(cell);
    });

    cell.addEventListener("mousemove", () => {
      if (isMouseDown) changeColor(cell);
    });

    container.appendChild(cell);
  }

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}

function changeColor(cell) {
  cell.style.backgroundColor = randomColor();
  let brightness = parseInt(cell.style.filter.match(/\d+/)[0]) - 10;
  cell.style.filter = `brightness(${brightness}%)`;
}

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

btn.addEventListener("click", () => {
  let size;
  do {
    size = parseInt(prompt("Choose a number between 1 and 100:"));
  } while (isNaN(size) || size < 1 || size > 100);

  createGrid(size);
});

createGrid(16);
