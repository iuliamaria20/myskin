
///// MAKES THE LOGIN FORM POPUP

document.getElementById("buttonIdLogin").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "flex";
})

///// CLOSE THE LOGIN FORM AND HIDE HELLO MESSAGE

document.querySelector(".close").addEventListener("click", function(){
	let messageHello = document.getElementById("helloMessage");
  	messageHello.innerHTML = '';
  	document.querySelector(".popup").style.display = "none";
})

///// HELLO MESSAGE TO MYSKIN

  document.getElementById("login").onclick = function() {loginHelloButton()};

  function loginHelloButton() {
  	let usernameLogin = document.getElementById("username");
  	let messageHello = document.getElementById("helloMessage");
  	messageHello.innerHTML = `Welcome to MYSKIN, ${username.value}!`;
    setTimeout(function(){ window.location = 'shop.html'; },3000);
  }

///// RESET VALUES USERNAME AND PASSWORD AFTER CLICKING X BUTTON

 document.querySelector(".close").addEventListener("click", function(){
  document.getElementById("username").value = '';
  document.getElementById("password").value = '';
})

