let btn = document.querySelector("#ekleBtn");

let liste = document.querySelector("#liste");
let todoTxt = document.querySelector("#todoTxt");

function listeyeEkle() {
  if (todoTxt.value == "") {
    alert("hatalı seçim");
  } else {
    liste.innerHTML += "<li> " + todoTxt.value + "</li>";
    todoTxt.value = "";
  }
 
}
btn.addEventListener("click", listeyeEkle);
