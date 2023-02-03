const form = document.querySelector("form");
const inputText = document.querySelector(".input-text");
const ul = document.querySelector("ul");
const done = document.querySelector(".done");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = inputText.value.trim();

  if (text) {
    ul.innerHTML += `
    <li>
        <p>${inputText.value}</p>
        <div class="buttons">
            <button class="done">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </li>`;
    inputText.value = "";
  } else {
    alert("Please enter your text");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "done") {
    e.target.parentElement.parentElement.classList.toggle("active");
  }

  if (e.target.className == "delete")
    e.target.parentElement.parentElement.remove();
});
