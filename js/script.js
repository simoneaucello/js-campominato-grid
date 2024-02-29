const gridContainer = document.querySelector('.grid-container');

reset();

// genero 100 square con un ciclo for

for (let i = 1; i <= 100; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
  console.log(square);
}






///// FUNCTION /////


function mySquare(index){
  const sq = document.createElement('div');
  sq.className = 'square'; 
  
  return sq
}



function reset(){
  gridContainer.innerHTML = '';
}