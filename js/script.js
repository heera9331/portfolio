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

let switcher = document.querySelector(".bgBtnWrapper span.bgBtn");
let colorPickerWrapper = document.querySelector(".hidden"); 
 
let rootElement = document.querySelector(":root");
console.log(rootElement);
var rootElementStyle = getComputedStyle(rootElement);


switcher.addEventListener('click', (e)=>{  
  // rootElement.style.setProperty("--main-color","#003003");
  console.log(colorPickerWrapper);
  colorPickerWrapper.classList.toggle("hidden"); 
})

function handleColorChange(e) {
  let colorValue = e.value;
  if(colorValue == "red") {
    rootElement.style.setProperty("--main-color", "red");
  }
  else if (colorValue == "green") { 
    rootElement.style.setProperty("--main-color", "#4afb53");
  } 
  else if (colorValue == "pink") {
    rootElement.style.setProperty("--main-color", "#db2777");
  } else if (colorValue == "purple") {
    
    rootElement.style.setProperty("--main-color", "#3f51b5");
  }
  else {
    rootElement.style.setProperty("--main-color", "#ff7606");
  }
}


// cursor functionality

document.addEventListener('mousemove', function(e) {
  var circleCursor = document.getElementById('circleCursor');
  circleCursor.style.left = e.pageX + 'px';
  circleCursor.style.top = e.pageY + 'px';
});