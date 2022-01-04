var count = 0;
var element = document.getElementById("my_button");
var box = document.getElementById("box");
element.onclick = function(event) {
  count = count + 1;
  if (count >= 5)
     box.innerHTML = "Заїбав клікати!";
  else
     box.innerHTML = "Change";
}
