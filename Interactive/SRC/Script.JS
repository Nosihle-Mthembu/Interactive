function submit (){
    document.getElementsByClassName("main2")[0].style.display = "block"
}

function one(){
  document.getElementsByClassName("div1")[0].innerHTML = "You selected 1 out of 5"
  document.getElementsByClassName("div1")[0].style.color = "rgb(254,118,16)"
  document.getElementById("b1").style.color = "white"
  document.getElementById("b1").style.background = "rgb(254,118,16)"
  document.getElementById("b2").style.background = "rgb(39, 46, 56)"
  document.getElementById("b3").style.background = "rgb(39, 46, 56)"
  document.getElementById("b4").style.background = "rgb(39, 46, 56)"
  document.getElementById("b5").style.background = "rgb(39, 46, 56)"
}

function two(){
  document.getElementsByClassName("div1")[0].innerHTML = "You selected 2 out of 5"
  document.getElementsByClassName("div1")[0].style.color = "rgb(254,118,16)"
  document.getElementById("b2").style.color = "white"
  document.getElementById("b1").style.background = "rgb(39, 46, 56)"
  document.getElementById("b2").style.background = "rgb(254,118,16)"
  document.getElementById("b3").style.background = "rgb(39, 46, 56)"
  document.getElementById("b4").style.background = "rgb(39, 46, 56)"
  document.getElementById("b5").style.background = "rgb(39, 46, 56)"
}

function three(){
  document.getElementsByClassName("div1")[0].innerHTML = "You selected 3 out of 5"
  document.getElementsByClassName("div1")[0].style.color = "rgb(254,118,16)"
  document.getElementById("b3").style.color = "white"
  document.getElementById("b1").style.background = "rgb(39, 46, 56)"
  document.getElementById("b2").style.background = "rgb(39, 46, 56)"
  document.getElementById("b3").style.background = "rgb(254,118,16)"
  document.getElementById("b4").style.background = "rgb(39, 46, 56)"
  document.getElementById("b5").style.background = "rgb(39, 46, 56)"
}

function four(){
  document.getElementsByClassName("div1")[0].innerHTML = "You selected 4 out of 5"
  document.getElementsByClassName("div1")[0].style.color = "rgb(254,118,16)"
  document.getElementById("b4").style.color = "white"
  document.getElementById("b1").style.background = "rgb(39, 46, 56)"
  document.getElementById("b2").style.background = "rgb(39, 46, 56)"
  document.getElementById("b3").style.background = "rgb(39, 46, 56)"
  document.getElementById("b4").style.background = "rgb(254,118,16)"
  document.getElementById("b5").style.background = "rgb(39, 46, 56)"
}

function five(){
  document.getElementsByClassName("div1")[0].innerHTML = "You selected 5 out of 5"
  document.getElementsByClassName("div1")[0].style.color = "rgb(254,118,16)"
  document.getElementById("b5").style.color = "white"
  document.getElementById("b1").style.background = "rgb(39, 46, 56)"
  document.getElementById("b2").style.background = "rgb(39, 46, 56)"
  document.getElementById("b3").style.background = "rgb(39, 46, 56)"
  document.getElementById("b4").style.background = "rgb(39, 46, 56)"
  document.getElementById("b5").style.background = "rgb(254,118,16)"
}

function cancel(){
  document.getElementsByClassName("main2")[0].style.display= "none"
}