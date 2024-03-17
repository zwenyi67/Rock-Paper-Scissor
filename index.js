/*
const box = document.getElementById('box');
const button= document.getElementById('button');



const mytext = document.createElement('h1');
mytext.textContent = 'Hello';

button.addEventListener('mouseover' , event => {
   box.style.backgroundColor = "yellow";
            box.textContent = "Don't do it !" ;
});

button.addEventListener('mouseout' , event => {
    box.style.backgroundColor = "lightgreen";
    box.textContent = "Click Me";
});

button.addEventListener('click', (event) => {

    const name = 'Zwe Nyi Nyi'

            box.style.backgroundColor = "tomato";
            box.textContent = "Ouch  !" ;
            event.append(mytext); })
            */


/*  const box = document.getElementById('box');

  let x = 0;
  let y = 0;
  const move = 10;


  document.addEventListener("keydown" , event => {
          
      if(event.key.startsWith("Arrow")) {

       event.preventDefault();
              
              if(event.key == "ArrowUp") {
                  y -= move;
              }
              else if(event.key == "ArrowDown") {
                  y += move;
              }
              else if(event.key == "ArrowRight") {
                  x += move;
              }
              else {
                  x -= move;
              }
              box.style.transform = `translate(${x}px, ${y}px)`;
          }
  })   */


  const choice = ['rock', 'paper', 'scissor'];

  const comDisplay = document.getElementById('comDisplay');
  const youDisplay = document.getElementById('youDisplay');
  const resultDisplay = document.getElementById('result');
  const gamebox = document.getElementById('game');
  const score = document.getElementById('score');
  const computerScore = document.getElementById('computerScore');
  const yourScore = document.getElementById('yourScore');

  let comScore = 0;
  let youScore = 0;
  
  function game(playerChoice) {


    let result = "";

      gamebox.classList.remove('d-none');
      score.classList.remove('d-none');

  
      const computerChoice = choice[Math.floor(Math.random() * 3)];
  
      switch(playerChoice) {
          case "rock":
              youDisplay.classList.remove('fa-hand', 'fa-hand-scissors','fa-rotate-90')
              youDisplay.classList.add('fa-hand-back-fist');
              break;
          case "paper":
              youDisplay.classList.remove('fa-hand-back-fist', 'fa-hand-scissors','fa-rotate-90')
              youDisplay.classList.add('fa-hand');
              break;
          case "scissor":
              youDisplay.classList.remove('fa-hand', 'fa-hand-back-fist')
              youDisplay.classList.add('fa-hand-scissors','fa-rotate-90');
              break;  
      }
  
      switch (computerChoice) {
          case "rock":
              comDisplay.classList.remove('fa-hand', 'fa-hand-scissors','fa-rotate-90')
              comDisplay.classList.add('fa-hand-back-fist');
              break;
          case "paper":
              comDisplay.classList.remove('fa-hand-back-fist', 'fa-hand-scissors','fa-rotate-90')
              comDisplay.classList.add('fa-hand');
              break;
          case "scissor":
              comDisplay.classList.remove('fa-hand', 'fa-hand-back-fist')
              comDisplay.classList.add('fa-hand-scissors','fa-rotate-90');
              break;
      }
  
      if (playerChoice === computerChoice) {
          resultDisplay.textContent = 'Draw, Try Again !';
          resultDisplay.style.color = 'black';

      }
      else {
          switch(playerChoice){
              case "rock":
                  result = (computerChoice  === "scissor") ? '1' : '2';
                  break;
              case "paper":
                  result = (computerChoice  === "rock") ? '1' : '2';
                  break;
              case "scissor":
                  result = (computerChoice  === "paper") ? '1' : '2';
                  break;
          }
      }

      switch(result) {
        case '1':
            resultDisplay.textContent = 'Yah, You Win !';
            resultDisplay.style.color = 'green';
            youScore ++;
            yourScore.textContent = "Your Score : " + youScore;
            break;
      
      case '2':
            resultDisplay.textContent = 'You Lost, Try Again!';
            resultDisplay.style.color = 'red';
            comScore ++;
            computerScore.textContent = "Computer Score : " + comScore;
            break;
      }
  }

  






