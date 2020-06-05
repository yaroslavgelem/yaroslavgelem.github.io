var content = document.createElement("div");
var body = document.getElementsByTagName ("body")[0];
var script = document.getElementsByTagName ("script")[0];
body.appendChild(content);
body.insertBefore(content, script);
content.id = "content";
var header = document.createElement("header");
content.appendChild(header);

// Create tag <select>
var select = document.createElement("select");
header.appendChild(select);
select.name = "currency_selection";
select.id = "currency";
for (let i = 0; i <= 3; i++){
    let selectOption = document.createElement("option");
    select.appendChild(selectOption);
}
var selectOption = document.getElementsByTagName("option");
selectOption[0].value = "USD";  
selectOption[0].innerText = "US Dollar";
selectOption[1].value = "EUR";
selectOption[1].innerText = "Euro";
selectOption[2].value = "PLN";
selectOption[2].innerText = "Zloty";
selectOption[3].value = "RUB";
selectOption[3].innerText = "Rubel";

//Create input fields
var inputDiv = document.createElement("div");
header.appendChild(inputDiv);
inputDiv.className = "date";
for (let i = 0; i <= 1; i++){
    let inputField = document.createElement("input")
    inputDiv.appendChild(inputField);
    inputField.type = "date";
}
var inputField = document.getElementsByTagName("input");
inputField[0].className = "field start_date";
inputField[1].className = "field end_date";

// Create and programing button
var button = document.createElement("button");
header.appendChild(button);
button.innerText = "Get Rate...";

button.addEventListener("click", getRate);
    
function getRate (e){
    let startDate = document.getElementsByClassName("field start_date")[0].value;
    let endDate = document.getElementsByClassName("field end_date")[0].value;
    let stepDate = "";
    var arrDate = [];
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);
    for (let i = startDate; i <= endDate; i = i + 24 * 3600 *1000){
        stepDate = new Date(i).toISOString().substr(0, 10).split("-").join("");
        arrDate.push(stepDate);    
    }
    for (let i = 0; i < arrDate.length ; i++){
        var baseURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";
        var URI = baseURL + currency.value + "&date=" + arrDate[i] + "&json";
        const XHR = new XMLHttpRequest();
        XHR.open ("GET", URI);
        XHR.send ();
        XHR.addEventListener("readystatechange", handler);
    }
}
function handler (e){
    if ((e.target.readyState === 4) && (e.target.status === 200)){
        console.log(e.target.responseText);
        // var data = JSON.parse(e.target.responseText);
    }
}