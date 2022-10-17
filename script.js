const container = document.querySelector(".container");
const btn = document.querySelector("button");
function coll(row, x) {
  for (let i = 0; i < x; i++) {
    const coll = document.createElement("div");
    coll.className = "coll";
    row.appendChild(coll);
  }
}

function row(x) {
  for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.className = "row";
    coll(row, x);
    container.appendChild(row);
  }
}

function hover() {
  const divs = document.querySelectorAll(".coll");
  divs.forEach((div) =>
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    })
  );
}

function grid() {
  btn.addEventListener("click", () => {
    let choise = 0;
    const divs = document.querySelectorAll(".row");
    divs.forEach((div) => div.parentNode.removeChild(div));
    while (choise <= 0 || choise > 100) {
      choise = parseInt(prompt("choose a nbr between 0 and 100 : "));
    }
    row(choise);
    hover();
  });
}

row(16);
hover();
grid();
