export default  class Game{
static count_cards = 4
static timeOut=2
static downTimeIntervalId=-1
static attempts=5
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

static winnerPlayer(){
    clearInterval(this.downTimeIntervalId)
    const audio=new Audio('./sounds/next-level.mp3')
    audio.play()
    setTimeout(() => {
            const result=confirm("Game Finshed,would you like to play again") 
        if(result)
        location.reload()
    }, 500);   
}
static StartDownTime(){
    let mintues=1
    let seconds=60
    const timeElm=document.querySelector('.info .time span')
    timeElm.innerHTML=mintues+':00'
   this.downTimeIntervalId=setInterval(() => {
        if(mintues===0)
        {
            clearInterval(this.downTimeIntervalId)
            this.gameOver()
            return
        }
        
        timeElm.innerHTML=`${mintues-1}:${--seconds}`
        if(seconds===0 && mintues>0)
            {
                --mintues
                seconds=60
            }
    }, 1000);
}
static gameOver(){
    debugger
   const aduio= new Audio('/sounds/gameOver.mp3')
   aduio.play()
    clearInterval(this.downTimeIntervalId)
    const result=confirm("Game Over , Do you want to play again?")
    if(result)
    location.reload()
}

static subAttempts(){
const attemptsElem=document.querySelector(".info .count-trying span")
attemptsElem.innerHTML=(--this.attempts)
if(this.attempts===0)
this.gameOver()
}
}