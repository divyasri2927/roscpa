var rsp=require('./roscpa')
var choice1=prompt("enter your a choice rock/scissors/paper")
var choice2=Math.random()
if (choice2 < 0.34){
	choice2 = "rock";
} 
else if(choice2 <= 0.89) {
	choice2 = "paper";
} 
else {
	choice2 = "scissors";
} 
console.log("Computer: " + choice2);
rsp.roscpa(choice1,choice2)