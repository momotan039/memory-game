import { ColorsGame } from "./colors_game.mjs"
import Game from "./Game.mjs"
import { ImagesGame } from "./images_game.mjs"



async function startGame() {
    try {
        await ImagesGame.buildCardsByImages()
    } catch (err) {
        alert(err)
        ColorsGame.buildCardsByColors()
    }
}

// startGame()
