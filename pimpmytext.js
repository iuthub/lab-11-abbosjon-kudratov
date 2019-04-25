function bigger(){

	var text=document.getElementById("text");
	text.style.fontSize = "24pt";
	var checked=document.getElementById("bling").checked;
	if (checked) {
		text.style.textDecoration="underline";
		text.style.color="green";
		//text.style.textDecoration="blink";


	}
}


function snoopify(){

		var text=document.getElementById("text");
		text.value=text.value.toUpperCase();
		var parts = text.value.split(".");
		//str = parts.join("_");
		text.value= parts.join("izzle");
	
}