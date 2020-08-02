function animatePress(colorChosen){
	$("#"+colorChosen).addClass("pressed");

	setTimeout(function(){
		$("#"+colorChosen).removeClass("pressed");
		},100);
}

function playSound(colorChosen){
	var audio = new Audio("sounds/"+colorChosen+".mp3");
	audio.play();
}

$(".box").click(function(){
	var colorChosen = this.id;
	animatePress(colorChosen);
	playSound(colorChosen);
	// console.log(colorChosen);
})