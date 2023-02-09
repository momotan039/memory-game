export default class Game{
static count_cards = 4
static timeOut=2
static buildCard(image, colorMode = false, color) {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')

    if (colorMode)
        img.style.background = color
    else
        img.src = image

    img.classList.add('front')
    const back = document.createElement('div')
    back.classList.add('back')
    card.append(img, back)
    return card
}

static playCardSound(){
    const audio=new Audio('/sounds/flipCard.mp3')
    audio.play()
}

static playFoundOne(){
    const audio=new Audio('/sounds/sameOne.mp3')
    audio.play()
}

static buildCard(image, colorMode = false, color) {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')

    if (colorMode)
        img.style.background = color
    else
        img.src = image

    img.classList.add('front')
    const back = document.createElement('div')
    back.classList.add('back')
    card.append(img, back)
    return card
}

}