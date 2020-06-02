var body = document.getElementsByTagName("body")[0];
var maintitle = document.createElement("h1");
maintitle.innerText = "To Do List";
var textarea = document.getElementById("textarea");
body.insertBefore(maintitle, textarea);
console.log(textarea.value);

//Create a new element to list
function addListItem() {
  var container = document.getElementById("content");
  var divList = document.createElement("div");
  var inputValue = textarea.value;
  container.appendChild(divList);
  if (inputValue === "") {
    alert("Потрібно щось написати!");
  } else {
    divList.className = "list";
  }
  divList.innerText = inputValue ;
}

// Programing button
var button = document.getElementById("add_btn");
button.addEventListener("click", addListItem);
