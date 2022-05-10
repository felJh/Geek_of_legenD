import * as bosses from'./boss.js'
import * as classes from './perso.js'




let totalTurnCount = 0;
let oneTurn = totalTurnCount/4

const launchGame = () => {
    const characterChoice= () => {
        let character = prompt('choose a character between mage, archer or warrior')
        character = character.toLowerCase()
        console.log(character)
    }
    characterChoice()

}
launchGame()