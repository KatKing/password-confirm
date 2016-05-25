
//Hide the hints



//when event happen on passwork input

$("form span").hide();

//Find out if password is valid
function passwordEvent(){
	if($(this).val().length > 8) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	}
}

function confirmPasswordEvent() {
	if($("#password").val() === $("#confirm_password").val()) {
		$("#confirm_password").next().hide();
	}else {
		$("#confirm_password").next().show();

	}


}


$("#password").focus(passwordEvent).keyup(passwordEvent);
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
	



