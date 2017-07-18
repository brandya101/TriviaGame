

//state variables 
// variables for //  Variable that will hold our setInterval that runs the stopwatch 
var intervalId;
var timer=25;
var array=[""];
var newIndex=0;
var question=" ";
var questions=[
["Which futbol player is not impressed, ever?", "Andrea Pirlo", "Harry Kane","El 'Pibe' Valderrama"],
["Soccer that headbutted Italian player in the final of the 2006 World Cup", "Gabriel Batistuta", "Lionel Messi","Zinedine Zidane"],
["Name the all time top scorer in Wolrd Cups?", "Miroslav Klose", "Il Fenomeno Ronaldo","Cristiano Ronaldo"],
["Team club with most European trophies?", "AC Milan", "Real Madrid","Manchester United"],
["Which country hosted the last World Cup?", "Costa Rica", "Peru", "Brazil"],
["Name country with the most World Cup titles?", "Brazil", "Germany", "Italy"],
["What team does Lionel Messi play for?", "Paris-Saint Germain", "Barcelona", "Real Madrid"],
["Famous futbol star who played with LA Galaxy, Manchester United and Real Madrid?", "Robbie Keane", "Giovanni dos Santos", "David Beckham"],
["Name the most expensive futbol player of all time?", "Luis Figo", "Cristiano Ronaldo", "Paul Pogba"],
["English team to win the title in the last two minutes of the game on the last fixture?", "Tottenham Spurs", "Arsenal", "Manchester City"]//10 items
];

$(document).ready(function(){

// Create a form jquery where when runGame starts it hides other and displays new one. 

//create page that displays if questions were answered correct 
//Create  reset function
function reset(){
	timer=25;

	function runGame(){
		timer--;

		console.log(timer);
		$("#timer").html(timer);
		if(timer === 0 ){

			clearInterval(intervalId);
			alert("Times Up")
		}
	}



	$(".start").on("click",function(){

		intervalId=setInterval(runGame,1000);
		
		

	});
}






//Create questions needed to answer
function triviaQuestions(){
	//Create form using jquery. Let this appear and hide the other div that show the start and Let's Start.
	for(newIndex = 0; newIndex < questions.length; newIndex++){
	question = questions[newIndex][0];
		for(var i = 1; i < 4; i++){
			choices= questions[newIndex][i];
			var inputTags = $("<input></input>");
			inputTags.attr("type","radio");
			inputTags.attr("name","choices").attr("values", "A");
			inputTags.html(choices);

		}

	$("#quizQuestions").append("<h3>" + question + "</h3>").append(inputTags);

	// for(newIndex=0;newIndex<4;newIndex++){
	// question = questions[newIndex][0];
	// var i = 0;
	// for(i = 0; i < 4; i++){
	// var choices = questions[newIndex][i]

	// $("#quizQuestions").append("<h3>" + question + "</h3>");

	// $("#quizChoices").append("<input type='radio' name='choices' value='A'>" + choices +"<br>");

	// }	
		// for(var i=1;i < 4; i++ ){

		// 	var choices = questions[newIndex][i];

		// 	$("#quizChoices").append("<input type='radio' name='choices' value='A'>" + choices +"<br>");
			
		// 	choices++;
		// 	console.log(choices);
		// 	}	

	}

	$("#quizChoices").append("<button id='submit'>Submit</button>")	
		$("#submit").on("click", function(){

			correctAnswers();
			clearInterval(intervalId);

		});
	}


//questions needed to be answered and corrected.
function correctAnswers(){
	

	newIndex++;
}






function runGame(){
	$(".container").css("display","none");

	timer--;

	$("#timer").html(timer);

	console.log(timer);
	
	if(timer === 0 ){

		clearInterval(intervalId);
		alert("Times Up")
		reset();
	}
}



$(".start").on("click",function(){


	intervalId=setInterval(runGame,1000);
	triviaQuestions();
	

	

});

});