// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const setBtn = document.querySelector("#button");
const dimesionLevel = document.querySelector('#difficolta');
const wrapGrid = document.querySelector(".wrap-grid");

setBtn.addEventListener('click', function(){
    wrapGrid.innerHTML = "";

    const gridDifficolta = dimesionLevel.value;
    console.log(gridDifficolta);
    let cellsNumber;
    let cellsParSide;

    switch (gridDifficolta){
        case '1':
            cellsNumber = 100;
            cellsParSide = 10;
            break;
        case '2':
            cellsNumber = 81;
            cellsParSide = 9;
            break;
        case '3':
            cellsNumber = 49;
            cellsParSide = 7;
    }

    const grid = document.createElement('div');
    grid.classList.add('grid');

    
    for(let num = 1; num <= cellsNumber; num++){
        // gen numero random per square
        const square = createSquare(num, cellsParSide);
        square.addEventListener('click', function(){
            this.classList.add('clicked')
        })
        grid.append(square);
    }


    wrapGrid.append(grid)
});

// funzioni


// gen square
function createSquare(num, cells) {
    const node = document.createElement('div');
    node.classList.add('square');
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    const span = document.createElement('span');
    span.append(num);

    node.append(span);

    return node;
}