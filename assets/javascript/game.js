

//state variables 
// variables for //  Variable that will hold our setInterval that runs the stopwatch 
var intervalId;
var timer=25;
var array=[""];
var newIndex=0;
var question=" ";
var choiceA, choiceB, choiceC;
var questions=[
["Which futbol player is never impressed, ever?", "Andrea Pirlo", "Harry Kane","El 'Pibe' Valderrama"],
["French player that headbutted Italian player in the final of the 2006 World Cup", "Gabriel Batistuta", "Lionel Messi","Zinedine Zidane"],
["Name the all time top scorer of World Cups?", "Miroslav Klose", "Il Fenomeno Ronaldo","Cristiano Ronaldo"],
["Team club with most European trophies?", "AC Milan", "Real Madrid","Manchester United"],
["Which country hosted the last World Cup?", "Costa Rica", "Peru", "Brazil"],
["Name country with the most World Cup titles?", "Brazil", "Germany", "Italy"],
["What team does Lionel Messi play for?", "Paris-Saint Germain", "Barcelona", "Real Madrid"],
["Famous futbol star who played with LA Galaxy, Manchester United and Real Madrid?", "Robbie Keane", "Giovanni dos Santos", "David Beckham"],
["Name the most expensive futbol player of all time?", "Luis Figo", "Cristiano Ronaldo", "Paul Pogba"],
["English team to win the title in the last two minutes of the game on the last fixture?", "Tottenham Spurs", "Arsenal", "Manchester City"]//10 items
];




//Need to go back and make the questions array into an object to get a quicker reference to questions and answers. 



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
//I did not create a seperate form for each question + answer. 
function triviaQuestions(){
	//Create form using jquery. Let this appear and hide the other div that show the start and Let's Start.
	for(newIndex = 0; newIndex < questions.length; newIndex++){
	question = questions[newIndex][0];
	choiceA=questions[newIndex][1];
	choiceB=questions[newIndex][2];
	choiceC=questions[newIndex][3];

	
	
	$("#quizQuestions").append("<h3 id='headerThree'>" + question + "</h3>" + "<br>").css("color","white");
	$("#quizQuestions").append("<input type='radio' name='choices' value=" + choiceA + " checked='checked'> "+ choiceA + "<br>");
	$("#quizQuestions").append("<input type='radio' name='choices' value=" + choiceB + ">"+ choiceB +" <br>");
	$("#quizQuestions").append("<input type='radio' name='choices' value=" + choiceC + ">"+ choiceC +" <br>");

	}

	$("#quizQuestions").append("<button id='submit'>Submit</button>")	
		$("#submit").on("click", function(){

			correctAnswers();
			clearInterval(intervalId);

		});
	}


//questions needed to be answered and corrected.
function correctAnswers(){
	//This function was suppose to get the value of the check marked position and return it
	// I was going to make it go through an array and check with the right answer. I realized I would need to instead of choiceA variable in value i would need a letter and add the right answer to the questions array. 
	//
	alert("Working submit button");
	newIndex++;
}






function runGame(){
	$(".container").css("display","none");


	timer--;
	
	$("#timer").text("Time Left Over: "+timer).css("display","block");

	console.log(timer);
	
	if(timer === 0 ){

		clearInterval(intervalId);
		alert("Times Up")
	}
}



$(".start").on("click",function(){


	intervalId=setInterval(runGame,1000);
	triviaQuestions();
	

});

});