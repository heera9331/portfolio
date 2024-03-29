let trigger = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

let flag = 0;

trigger.addEventListener("click", () => {
  console.log("got clicked");

  menu.classList.toggle("show-menu");
  if (flag == 0) {
    menu.classList.remove("menu");
    trigger.innerHTML = `<span class="material-symbols-outlined">close</span> `;

    flag = 1;
  } else {
    trigger.innerHTML = `<span class="material-symbols-outlined">menu</span> `;
    menu.classList.add("menu");
    flag = 0;
  }
});

let click = 0;
const handleBg = (e) => {
  let root = document.querySelector("html");
  console.log(root);
  if (click) {
    root.style.setProperty("--main-color", "#ff7606");
  } else {
    root.style.setProperty("--main-color", "#ff4406");
  }
  click = click ? 0 : 1;
};
