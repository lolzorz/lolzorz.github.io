function submit() {
	var btn = document.getElementById("username").value;
	if(btn == "") {
		alert("USERNAME CAN NOT BE NULL");
		return;
	}
	window.location.replace("./chatroom.html?username=" + btn);
}