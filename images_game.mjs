import Game from './Game.mjs';

let selectedCards = []
let flipedCards = []
let images = []


function handelFlipCards() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', () => {

            if (selectedCards.length > 1)
                return

            if (card.classList.contains('flip'))
                return

            card.classList.add('flip')
            Game.playCardSound()
            const img = card.querySelector('img').src
            selectedCards.push({
                card: card,
                img: img
            })

            if (selectedCards.length === 2)
                checkSamePhotos()
        })
    });
}

 function checkSamePhotos() {
    if (selectedCards[0].img !== selectedCards[1].img) {
        setTimeout(() => {
            selectedCards[0].card.classList.remove('flip')
            selectedCards[1].card.classList.remove('flip')
            selectedCards = []
        }, 700);
    } else {
        flipedCards.push(selectedCards[0])
        flipedCards.push(selectedCards[1])
        Game.playFoundOne()
        const img=selectedCards[0].img
        images.splice(images.indexOf(img),1)
        //check winner
        if(images.length==0)
        {
            Game.winnerPlayer()
        }

        selectedCards = []
    }
}

async function generateImagesCards() {
    const myKey = 'TQpNsOrNXPh3WAJ1m6AHOgnbHKQyd-K6p0j_AXkjmNQ'
    const url = `https://api.unsplash.com/photos/random?count=${Game.count_cards/2}&client_id=${myKey}`
    return fetch(url)
    .then(res =>res.json())
    .then(res=>{
            debugger
            const result = []
            res.forEach(image => {
                result.push(image.urls.regular)
            })
            return result
    })
    .catch(err=>Promise.reject(err))
}

export async function buildCardsByImages() {
    const cards = document.querySelector('.cards')
    try {
        images = await generateImagesCards().then(res => res)
    } catch (error) {
        return Promise.reject(error)
    }

    images.forEach(image => {
        cards.appendChild(Game.buildCard(image))
    })
    debugger
    //shuffel images
   images.sort(() => Math.random() - 0.5);
    //append it again
    images.forEach(image => {
        cards.appendChild(Game.buildCard(image))
    })
    handelFlipCards()
}

export * as ImagesGame from './images_game.mjs'