let starElement = document.getElementById("console");
let triangleSize = 10;
let triangleWidth = 1;

for(var i = 0; i < triangleSize; i++) {

	for(var q = 0; q < triangleWidth; q++) {
		starElement.innerHTML += "*";
	}

	triangleWidth++;

	starElement.innerHTML += "<br>";
}