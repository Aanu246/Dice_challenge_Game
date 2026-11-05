
//alert(randomNUMBER1);
//alert(randomNUMBER2);

function rollDice(){
  
    document.querySelector(".btn").addEventListener("click", function(){
    var randomNUMBER1 = Math.floor(Math.random() * 6) + 1;
    var randomNUMBER2 = Math.floor(Math.random() * 6) + 1;
    //for player 1
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNUMBER1 + ".png");
     //for player 2
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNUMBER2 + ".png");

        //Determine the winner
        if(randomNUMBER1 > randomNUMBER2){
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
        }else if(randomNUMBER1 === randomNUMBER2){
            document.querySelector("h1").innerHTML = "Draw!";
        }
        else{
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
        }
    });


}
rollDice();



