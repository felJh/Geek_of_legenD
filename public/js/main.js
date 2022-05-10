import * as bosses from'./bosses.js'
import * as classes from './characters.js'




const launchGame = () => {
    
    // GAME TURNS
    let totalTurnCount = 0
    let oneTurn = totalTurnCount/2

    //CHARACTERS CHOICE FUNCTION
    const characterChoice= () => {
        let character = prompt('choose a character between mage, archer or warrior')
        characterLow = character.toLowerCase()
        console.log(character)
    }
    characterChoice()

}
launchGame()