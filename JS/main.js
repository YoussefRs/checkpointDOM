

// Incrémentation
let plus1 = document.getElementsByClassName("plus")
for (let i = 0; i < plus1.length; i++) {
  plus1[i].addEventListener("click", function () {
        plus1[i].nextElementSibling.innerHTML++
        Somme()
      })
}


// Décrémentation
let moins1 = document.getElementsByClassName("moins")
for (let i = 0; i < moins1.length; i++) {
  moins1[i].addEventListener("click", function () {
        if (moins1[i].previousElementSibling.innerHTML > 0) {
          moins1[i].previousElementSibling.innerHTML--
          Somme()
    
        }
      })
 }


// Delete 
let quantite1 = document.getElementsByClassName("quantite")
for (let i = 0; i < quantite1.length; i++) {
  quantite1[i].addEventListener("click", function () {
    quantite1[i].innerHTML = 0
      })
}


//Somme
function Somme() {
  let price = document.getElementsByClassName("price")
  let quantity = document.getElementsByClassName("quantite")
  let sum = 0
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].innerHTML * quantity[i].innerHTML;
  }
  document.getElementById("totalPrice").innerHTML = "Total Price: $" + sum;
}

//Heart
let heart = document.getElementsByClassName("fa-heart")
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("red");
  });
}