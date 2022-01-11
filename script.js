function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function sound(ev){
	var bill = ev.target.getAttribute('id');
	const sonido = new Audio('./audios/'+ bill +'.wav');
	sonido.play();
	sonido.loop = false;
	sonido.playbackRate = 1;
   }