const cardArray = [
    {
        name: 'circle',
        img: 'img/circle.png',
    },
    {
        name: 'lightning',
        img: 'img/lightning.png',
    },
    {
        name: 'pentagon',
        img: 'img/pentagon.png',
    },
    {
        name: 'square',
        img: 'img/square.png',
    },
    {
        name: 'star',
        img: 'img/star.png',
    },
    {
        name: 'triangle',
        img: 'img/triangle.png',
    },
    {
        name: 'circle',
        img: 'img/circle.png',
    },
    {
        name: 'lightning',
        img: 'img/lightning.png',
    },
    {
        name: 'pentagon',
        img: 'img/pentagon.png',
    },
    {
        name: 'square',
        img: 'img/square.png',
    },
    {
        name: 'star',
        img: 'img/star.png',
    },
    {
        name: 'triangle',
        img: 'img/triangle.png',
    }
]
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');

const resultDisplay = document.querySelector('#result');
const failureDisplay = document.querySelector('#failure');

const winDisplay = document.querySelector('#win');
const loseDisplay = document.querySelector('#lose');

let count = 30;
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
    for(let i=0; i<cardArray.length; i++) {
        const grid = document.createElement('img');
        grid.setAttribute('src','img/blank.png');
        grid.setAttribute('data-id',i);
        // console.log(grid, cardArray[i].name);
        
        gridDisplay.append(grid);
        
        grid.addEventListener('click',flipCard);
    }
}

createBoard();

function checkMath() {
    console.log("check match");
    const imgArray = document.querySelectorAll('img');
    const optionOne = cardsChosenId[0];
    const optionTwo = cardsChosenId[1];

    if(optionOne == optionTwo) {
        alert('You click the same card');
        imgArray[optionOne].setAttribute('src','img/blank.png');
        imgArray[optionTwo].setAttribute('src','img/blank.png');
    }
    
    else if(cardsChosen[0] == cardsChosen[1]) {
        imgArray[optionOne].setAttribute('src','img/correct.png');
        imgArray[optionTwo].setAttribute('src','img/correct.png');
        alert('You have found a match');

        imgArray[optionOne].removeEventListener('click',flipCard);
        imgArray[optionTwo].removeEventListener('click',flipCard);

        cardsWon.push(cardsChosen[0]);
        cardsWon.push(cardsChosen[1]);
        resultDisplay.innerHTML = cardsWon.length;
    }
    else {
        imgArray[optionOne].setAttribute('src','img/blank.png');
        imgArray[optionTwo].setAttribute('src','img/blank.png');
        alert('Sorry try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    
    if (cardsWon.length === cardArray.length) {
        resultDisplay.innerHTML = 'Congratulatons you have cleared the game!';
        gridDisplay.style.display='none';
        winDisplay.style.display='block';

    }
}

function flipCard() {
    count-=1;
    const cardId = this.getAttribute('data-id');
    // console.log(cardArray[cardId].name)
    this.setAttribute('src',cardArray[cardId].img); // here this calls the img tag not the object inside this
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    // console.log(cardsChosen);
    if(cardsChosen.length === 2) {
        setTimeout(checkMath,500);
    }
    failureDisplay.innerHTML = count;
    console.log(count);
    if(count === 0 ) {
        setTimeout(gameOver, 1000);
    }
}

function gameOver() {
    gridDisplay.style.display='none';
    loseDisplay.style.display='block';
}