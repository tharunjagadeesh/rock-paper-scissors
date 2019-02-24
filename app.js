var userScore =0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


function getComputerChoice()
{
	const choices={'r','p','s'};
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber]; 
}
function converttoword(letter)

{ if(letter=="r")return"Rock"
  if(letter=="p")return "Paper"
  else return"Scissor"

}

function win(userChoice,computerChoice)
{
 userScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 const smallUserWord="user".fontsize(3).sub();
 const smallCompWord="comp".fontsize(3).sub();
 result_p.innerHTML=`${converttoword(userChoice)}${smallUserWord}loses to ${converttoword(computerChoice)}${smallCompWord}.You Won`}
function lose(userChoice,computerChoice)
{
 computerScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 const smallUserWord="user".fontsize(3).sub();
 const smallCompWord="comp".fontsize(3).sub();
 result_p.innerHTML=`${converttoword(userChoice)}${smallUserWord}loses to ${converttoword(computerChoice)}${smallCompWord}.You LOST`}
}
function draw(userChoice,computerChoice)
{
 userScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_p.innerHTML=`${converttoword(userChoice)}${smallUserWord} draws with  ${converttoword(computerChoice)}${smallCompWord}.Draw `}
}






function game(userChoice)
{
	const computerChoice=getComputerChoice();
	switch(userChoice+computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice)
		break;
		case "rp":
		case "ps":
		case "sr":
		lose(userChoice,computerChoice)
		break:
		case "rr":
		case "pp":
		case "ss":
		draw()
		break;
	}
}


function main(){
	rock_div.addEventListener('click',function(){game("r");})
	paper_div.addEventListener('click',function(){game("p");})
	scissor_div.addEventListener('click',function(){game("s");})
	}
 
 main();