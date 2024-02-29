const gridContainer = document.querySelector('.grid-container');

reset();

// genero 100 square con un ciclo for

for (let i = 1; i <= 100; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
}






///// FUNCTION /////


function mySquare(index){
  const sq = document.createElement('div');
  sq.className = 'square'; 
  // creo una proprietà custom per sq e la chiamo _sqID 
  sq._sqID = '';

  sq.addEventListener('click', function(){

    this.innerHTML = (!this.classList.add('clicked'))
                      ? this.innerHTML = this._sqID
                      : this.innerHTML = '';

  console.log(index);
  })

  return sq
}



function reset(){
  gridContainer.innerHTML = '';
}