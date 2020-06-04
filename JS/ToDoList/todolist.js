var body = document.getElementsByTagName("body")[0];
var header = document.createElement ("header");
var maintitle = document.createElement("h1");
var textarea = document.getElementById("textarea");
var button = document.getElementById("add_btn");
var container = document.getElementById("content");
body.insertBefore(header,container);
maintitle.innerText = "To Do List";
header.appendChild(maintitle);
header.appendChild(textarea);
header.appendChild(button);
header.insertBefore(maintitle, textarea);




//Create a new element to list
function addListItem() {
  var inputValue = textarea.value;
  if (inputValue === "") {
    alert("Потрібно щось написати!");
  } else {
    var divItem = document.createElement ("div");
    var newDiv = document.createElement("div");
    var imageCircle = document.createElement("img");
    var newP = document.createElement("p");
    var buttonPlus = document.createElement("button");
    var imagePlus = document.createElement ("img");
    var buttonClose = document.createElement("button");
    var imageClose = document.createElement ("img");
    container.appendChild(divItem);
    divItem.appendChild(newDiv);
    divItem.appendChild(buttonPlus);
    buttonPlus.appendChild(imagePlus);
    divItem.appendChild(buttonClose);
    buttonClose.appendChild(imageClose);
    newDiv.appendChild(imageCircle);
    newDiv.appendChild(newP);
    divItem.className = "item";
    newDiv.className = "list not_checked";
    imageCircle.className = "image";
    imageCircle.src = "images/notcheck.png";
    newP.innerText = inputValue;
    buttonPlus.className = "btn item_btn plus_btn";
    imagePlus.src = "images/plus_buttom.png";
    buttonClose.className = "btn item_btn close_btn";
    imageClose.src = "image/close_button.png";
  }
  document.getElementById("textarea").value = "";
}

// Programing button
button.addEventListener("click", addListItem);

// Create checked list item
function mouseClick(e) {
  e.target.className == "list not_checked"
    ? (e.target.className = "list checked")
    : e.target.className == "list checked"
    ? (e.target.className = "list not_checked")
    : e.target.className == "list not_checked";
}
var divList = document.getElementById("content");
console.log(divList)
// if (item)
// var divList = document.getElementsByClassName("list not_checked");
// divList.addEventListener("click", function mouseClick(e){});
// var imageList = document.getElementsByClassName("image")[0];
// imageList.addEventListener("click", function mouseClick(e){});

// Add delete button
