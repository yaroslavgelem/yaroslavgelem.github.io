var container = document.getElementById("container");
for (var i = 1; i <= 8; i++) {
  var newRow = document.createElement("div");
  newRow.setAttribute("class", "row");
  for (var j = 1; j <= 8; j++) {
    var newCell = document.createElement("div");
    var _classblwh = "";
    _classblwh =
      (i % 2 == 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 == 0)
        ? "cell cell_black"
        : "cell cell_white";
    newCell.setAttribute("class", _classblwh);
    newRow.appendChild(newCell);
  }
  container.appendChild(newRow);
}