function callRegister() {
	
	var track = "?trackId=" + getCookie1("sessionUUid")+"&userId="+getCookie1("userId");
	window.location.href = "http://129.159.104.70:8080/user/openregister"+track;

}

function checkCokkies(){
	
	if(getCookie1("sessionUUid") != null && getCookie1("userId") != null && getCookie1("sessionUUid") != "" && getCookie1("userId") != ""){
		
		console.log(getCookie1("sessionUUid"));
		console.log(getCookie1("userId"));
		//var track = "?trackId=" + getCookie1("sessionUUid")+"&userId="+getCookie1("userId");
		//window.location.href = "http://152.70.192.169:8080/user/validateCookie"+track;
		
	} else {
		alert("Invalid Session - Kindly Login");
		window.location.href = "http://152.70.192.169:8080/login.html";
		
	}
	return false;
}

function getCookie1(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}