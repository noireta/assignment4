
let collectUser ; 
do{
    collectUser  = prompt('Repeate entries? Rock, Paper, Scissors');
}while ((collectUser !== "Rock") && (collectUser !== "Scissors") && (collectUser !== "Paper"));

  let choice = Math.round(Math.random() * 2 );
      console.log(choice);
  
  if ((collectUser == "Rock") && (choice == 1)){
      alert('winner is Computer');

  }else if ((collectUser == "Rock" ) && (choice == 2)){
      alert('winner is User');

  }else if((collectUser == "Paper") && (choice == 0)){
      alert('winner is User');

  }else if ((collectUser == "Paper") && (choice == 2)){
      alert('winner is Computer');

  }else if((collectUser == "Scissors") && (choice == 0)){
    alert('winner is Computer');

  }else if((collectUser == "Scissors") && (choice == 1)){
    alert('winner is User');

  }else{
      alert('Game is  draw');
  }