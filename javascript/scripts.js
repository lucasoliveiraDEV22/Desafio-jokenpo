const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log('Humano:' + ' ' + human + ' ' + 'Máquina:' + ' ' + machine);

  if (human === machine) {
    result.innerHTML = 'Deu empate 👍';
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    result.innerHTML = 'Você ganhou a rodada ! 👏';
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
  } else {
    result.innerHTML = 'Você perdeu para a máquina! 😢';
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
  }
};
