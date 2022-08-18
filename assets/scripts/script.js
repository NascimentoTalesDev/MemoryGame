const FRONT = "card_front"; 
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";



startGame()

function startGame() {

    initializeCards(game.creatCardsFromTechs());
}

function initializeCards(cards) {
    
    const gameBoard = document.getElementById('gameBoard')

    game.cards.forEach(card => {
        
        let cardElement = document.createElement('div');
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        cardElement.id = card.id;

        creatCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)

        gameBoard.appendChild(cardElement);
        
    });

    console.log(gameBoard);
}

function creatCardContent(card, cardElement) {
    
    creatCardFace(FRONT, card, cardElement);
    creatCardFace(BACK, card, cardElement)
}

function creatCardFace(face, card, element) {
    
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)

    if (face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "./images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = "&lt/&gt"    

    }

    element.appendChild(cardElementFace)
}





function flipCard() {
    console.log(this.classList.add('flip'));
}