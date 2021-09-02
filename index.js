// Functions Section
function rollTheDices() {

  // Generates first dice
  var diceNumber1 = Math.floor((Math.random() * 6 + 1));                        // Dice 1 - 6
  var diceImage1 = "dice" + diceNumber1 + ".png";                               // dice1.png - dice6.png
  var diceSource1 = "images/" + diceImage1;                                     // images/dice1.png - images/dice6.png
  document.querySelector(".img1").setAttribute("src", diceSource1);

  // Generates second dice
  var diceNumber2 = Math.floor((Math.random() * 6 + 1));                        // Dice 1 - 6
  var diceImage2 = "dice" + diceNumber2 + ".png";                               // dice1.png - dice6.png
  var diceSource2 = "images/" + diceImage2;                                     // images/dice1.png - images/dice6.png
  document.querySelector(".img2").setAttribute("src", diceSource2);

  // Verifies who is the winner
  if (diceNumber1 > diceNumber2) {
    document.querySelector("h1").innerText = "🏆 Player 1 Wins!";
  }
  else if (diceNumber2 > diceNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🏆";
  }
  else {
    document.querySelector("h1").innerText = "Draw!";
  }

}

// Run Functions
rollTheDices();
