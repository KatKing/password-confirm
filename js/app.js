


var $password = $("#password");
var $passConfirm = $("#confirm_password");

$("form span").hide();


function passwordValid(){
	return $password.val().length > 8;
}

function passwordsMatch() {
	return $password.val() === $passConfirm.val();
}

function canSubmit(){
	return passwordValid() && passwordsMatch();
}


function passwordEvent(){
	if (passwordValid()) {
		$password.next().hide();
	} else {
		$password.next().show();
	}
}

function confirmPasswordEvent() {
	if (passwordsMatch()) {
		$passConfirm.next().hide();
	}else {
		$passConfirm.next().show();

	}


}
function enableSubmit(){
	$("#submit").prop("disabled", !canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);


$passConfirm.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);

enableSubmit();



