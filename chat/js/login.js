function submit() {
	var btn = document.getElementById("username").value;
	window.location.replace("./../chatroom.html?username=" + btn);
}