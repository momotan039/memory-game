let colors = []
let selectedCards = []
let flipedCards = []

 function handelFlipCards() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', () => {

            if (selectedCards.length === 2){
                return
            }

            if (card.classList.contains('flip'))
                return

            card.classList.add('flip')
            const color = card.querySelector('img').style.background
            selectedCards.push({
                card: card,
                color: color
            })

            if (selectedCards.length === 2)
                checkSameColor()
        })
    });
}

 function checkSameColor() {
    if (selectedCards[0].color !== selectedCards[1].color) {
        setTimeout(() => {
        debugger
            selectedCards[0].card.classList.remove('flip')
            selectedCards[1].card.classList.remove('flip')
            selectedCards = []
        }, 700);
    } else {
        flipedCards.push(selectedCards[0])
        flipedCards.push(selectedCards[1])

        const color=selectedCards[0].color
        colors.splice(color.indexOf(color),1)
        //check winner
        if(colors.length==0)
        alert("Finish Game")

        selectedCards = []
    }
}

export function buildCardsByColors() {
    const cards = document.querySelector('.cards')
    generateRandomColors()
    colors.forEach(c=>{
        cards.appendChild(buildCard(null,true,c))
    })
    colors = colors.sort((a, b) => (Math.random()) - (Math.random()))
    colors.forEach(c=>{
        cards.appendChild(buildCard(null,true,c))
    })
    handelFlipCards()
}

 function generateRandomColors() {
    for (let i = 0; i < count_cards/2; i++) {
        const color=Math.floor(Math.random()*16777215).toString(16);
        colors.push(`#${color}`)
    }
}


export * as ColorsGame from './colors_game.mjs'