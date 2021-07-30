var bg = ["1", "2", "3", "4", "5", "6"];
var count = 1;
function changeBg() {
  var sec = document.getElementsByClassName('container1')[0];
  var add = "/" + count + ".jpg";
  sec.style.backgroundImage = "url(images/backgrounds" + add + ")";
  if (count < bg.length) {
    count++;
  } else {
    count = 1;
  }
}
window.onload = setInterval(changeBg, 3000);

// ***************************FOR CAROUSEL****************************

var count_1 = 1;

function next_rev() {
  var name = "rev_" + count_1;
  document.getElementsByClassName(name)[0].style.display = "none";
  count_1++;
  if (count_1 == 4) {
    count_1 = 1;
  }
  var name = "rev_" + count_1;
  document.getElementsByClassName(name)[0].style.display = "block";
}

function prev_rev() {
  var name = "rev_" + count_1;
  document.getElementsByClassName(name)[0].style.display = "none";
  count_1--;
  if (count_1 == 0) {
    count_1 = 3;
  }
  var name = "rev_" + count_1;
  document.getElementsByClassName(name)[0].style.display = "block";

}

var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('prev')[0];
var ord_but=document.getElementsByClassName("ord")[0];

next.addEventListener("click", next_rev);
prev.addEventListener("click", prev_rev);
ord_but.addEventListener("click",function () {
  window.location.hash="jump_here";
})


document.addEventListener("keydown", function(event) {
  if (event.keyCode === 39) {
    next_rev();
  }
})
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    prev_rev();
  }
})

// ****************************PLACE ORDER**************************
for (let i = 0; i < document.querySelectorAll(".amount strong").length; i++) {
  var add = document.getElementsByClassName('add')[i];
  add.addEventListener("click", add_to_cart);

  var rem = document.getElementsByClassName('remove')[i];
  rem.addEventListener("click", rem_from_cart);


  function add_to_cart() {
    const curr_amt = document.querySelectorAll(".amount strong")[i].innerHTML;
    var curr_val = parseInt(curr_amt);
    curr_val++;
    document.querySelectorAll(".amount strong")[i].innerHTML = String(curr_val);
  }

  function rem_from_cart() {

    var curr1_amt = document.querySelectorAll(".amount strong")[i].innerHTML;
    var curr1_val = parseInt(curr1_amt);
    if (curr1_val == 0) {
      curr1_val = 0;

    } else {
      curr1_val--;
      document.querySelectorAll(".amount strong")[i].innerHTML = String(curr1_val);
    }
  }

}
