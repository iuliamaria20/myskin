///// COUPON ALERT

$( "#coupon" ).click(function() {
	let txt;
	let email = prompt("You just received your 20% off coupon!\nPlease enter your email address to receive the coupon:");
	if (email == null || email == "") {
	txt = "You refused your 20% off.";
	} else {
	txt = "Check your email to be able to use your unique coupon. Have a wonderful day!";
	}
	document.getElementById("textCoupon").innerHTML = txt;
});
