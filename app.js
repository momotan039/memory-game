import Game from "./Game.mjs"
import { ImagesGame } from "./images_game.mjs"
const count_cards = 4



async function startGame() {
    try {
        await ImagesGame.buildCardsByImages(count_cards,buildCard)
    } catch (err) {
        console.log(err);
        // buildCardsByColors(count_cards,buildCard)
    }
}

startGame()
