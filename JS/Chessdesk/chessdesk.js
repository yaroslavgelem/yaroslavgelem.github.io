var container = document.getElementById("container");
for (var i = 1; i <= 8; i++){
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    for (var j = 1; j <= 8; j++){
        var newCell = document.createElement("div");
        if ((i % 2 == 0) && (j % 2 !== 0)) {
            newCell.setAttribute("class", "cell cell_black");
        } else if ((i % 2 !== 0) && (j % 2 == 0)) {
            newCell.setAttribute("class", "cell cell_black");
        } else {
            newCell.setAttribute("class", "cell cell_white");
        }
        newRow.appendChild(newCell);
    }
    container.appendChild(newRow);
        
  }

