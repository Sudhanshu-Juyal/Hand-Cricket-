var userScore=0;
var compScore=0;
var userSpan=document.getElementById('user-score');
var compSpan=document.getElementById('comp-score');
var First=document.getElementById('first');
var Second=document.getElementById('second');
var Third=document.getElementById('third');
var Fourth=document.getElementById('fourth');
var Fifth=document.getElementById('fifth');
var Sixth=document.getElementById('sixth');
var userResult=document.querySelector('.Uresult');
var compResult=document.querySelector('.Cresult');
var Reload=document.getElementById('reload');


	function usergame(userChoice)
	{
		if(userResult.innerHTML==`You are out`)
                {
         	compgame(userChoice);
                 }
      else
        {
         var compChoice=getCompchoice();
        // console.log(userChoice);
         //console.log(compChoice);
         if(userChoice==compChoice)
         {
         	userResult.innerHTML=`You are out`;
         	
         }
         else
         {
         	userResult.innerHTML=userChoice + " run";
         	var score=getScore(userChoice);
         	userSpan.innerHTML=score +':';
          }
             
          
      }
        
	}
function getCompchoice()
{
	var choices=[1,2,3,4,6];
	var random=Math.floor(Math.random()*5);
	return choices[random];
}

main();
function main()
{
	First.addEventListener('click',first);
	function first()
	{
		usergame(1);
		
	}
	Second.addEventListener('click',second);
	function second()
	{
		usergame(2);
		
	}
	Third.addEventListener('click',third);
	function third()
	{
		usergame(3);
		
	}
	Fourth.addEventListener('click',fourth);
	function fourth()
	{
		usergame(4);
		
	}
	Sixth.addEventListener('click',sixth);
	function sixth()
	{
		usergame(6);
		
	}
}
function getScore(userChoice)
{
	userScore=userScore+userChoice;

return userScore;
}
function compgame(userChoice)
{
	//console.log('Inside compmain');
	if(compResult.innerHTML=="Computer gets out"||compResult.innerHTML=="Computer wins")
	{
		reload();
	}
	
	else
	{
	var compChoice=getCompchoice();
	console.log('userchoice is ' + userChoice);
	console.log('compChoice is ' + compChoice);
      if(userChoice==compChoice)
      {
      	compResult.innerHTML="Computer gets out";

      	var s=winCheck(compScore,userScore);
      	alert('User wins by ' + s + 'runs');
      	
      }


     else
     {
     	compResult.innerHTML=compChoice +" run";
     	var compscore=getcomscore(compChoice);
     	console.log(compScore);
        compSpan.innerHTML=compscore;
        if(compscore>userScore)
        {
        	var diff=compscore-userScore;
        	alert('Computer wins this match by ' + diff + ' run');
        	compResult.innerHTML="Computer wins";
           
        }

      }
        
	
}
}
function getcomscore(compChoice)
{
	compScore=compScore+compChoice;
	return compScore;
}
function winCheck(compScore,userScore)
{
	var diff = userScore-compScore;
	return diff;
}
Reload.addEventListener('click',play);


function play()
{
	  console.log('in the  play');
	  if(confirm("Do You want to play again"))
      	{
      		userScore=0;
      		compScore=0;
      		userSpan.innerHTML="0";
      		compSpan.innerHTML="0";
      		userResult.innerHTML="User Score";
      		compResult.innerHTML="Computer Score";
      	}
}
function reload()
{
	console.log('waiting for reload to click');
}