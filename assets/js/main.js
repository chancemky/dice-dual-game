function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage1 = "dice" + randomNumber1 + ".png";
    const randomImageSource1 = "./assets/images/" + randomDiceImage1;
  
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage2 = "dice" + randomNumber2 + ".png";
    const randomImageSource2 = "./assets/images/" + randomDiceImage2;
  
    function animateDice(image, finalImageSource, callback) {
        const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png"];
        let index = 0;
        const interval = setInterval(() => {
            if (index >= diceImages.length) {
                clearInterval(interval);
                image.setAttribute("src", finalImageSource);
                callback();
            } else {
                image.setAttribute("src", "./assets/images/" + diceImages[index]);
                index++;
            }
        }, 100);
    }
  
    function showResult() {
        const resultText = randomNumber1 > randomNumber2 ? "Player 1 Wins!" :
                          (randomNumber2 > randomNumber1 ? "Player 2 Wins!" : "Draw!");
        document.querySelector("h1").innerHTML = resultText;
    }
  
    animateDice(document.querySelectorAll("img")[0], randomImageSource1, () => {
        animateDice(document.querySelectorAll("img")[1], randomImageSource2, showResult);
    });
}
  
document.querySelector("button").addEventListener("click", rollDice);