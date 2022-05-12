import * as bosses from './bosses.js'
import * as classes from './characters.js'
export {
    launchGame
}

let a = 0

const launchGame = () => {
    let player
    let playerHit
    let playerHealth
    let playerRage
    let boss
    let bossHit
    let bossHealth

    //CHARACTERS CHOICE 
    let character = prompt('Choose a character between mage, archer or warrior')
    let characterLow = character.toLowerCase()
    characterLow = characterLow.replace(' ', '')

    if (characterLow === 'warrior') {
        console.log('Congratualtion ! You are now playing a warrior')
        player = classes.warrior
        playerHealth = classes.warrior.healthPoint
        playerHit = classes.warrior.hitPoint
        playerRage = classes.warrior.ragePoint
        var playerDefence = () => {
            playerHealth = playerHealth + bossHit / 2
        }
        var playerAttack = () => {
            bossHealth = bossHealth - playerHit
            if (turn %8 === 0) {
                console.log('%c The warrior is now enraged !', 'color: red')
                playerHit = playerHit * 1.25
                playerRage = 0 
            }
            else {
                playerRage = playerRage + 1
            }
        }
        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.warrior.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a feared warrior \n`, 'color: green;')
    }
    else if (characterLow === 'archer') {
        player = classes.archer
        playerHealth = classes.archer.healthPoint
        playerHit = classes.archer.hitPoint
        var playerDefence = () => {
            playerHealth = playerHealth + bossHit / 2
        }
        var playerAttack = () => {
            bossHealth = bossHealth - playerHit
        }

        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.archer.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a very skilled archer \n`, 'color: green;')
    }
    else if (characterLow === 'mage') {
        player = classes.mage
        playerHealth = classes.mage.healthPoint
        playerHit = classes.mage.hitPoint
        var playerDefence = () => {
            playerHealth = playerHealth + bossHit / 2
        }
        var playerAttack = () => {
            bossHealth = bossHealth - playerHit
        }

        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.mage.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a very powerful mage\n`, 'color: green;')
    }
    else {
        alert('Please choose between \'warrior\', \'mage\' or \'archer\'')
    }
    console.table(player);

    //RANDOM BOSS 
    const bossRandom = () => {
        const randomNum = Math.floor(Math.random() * 3)
        console.log('Brace yourself, an enemy emerge from the dark... \n ')
        switch (randomNum) {
            case 0:
                boss = bosses.chronos
                bossHealth = bosses.chronos.healthPoint
                bossHit = bosses.chronos.hitPoint
                console.log('%c \n- - - C H R O N O S - - -  \n\n- just entered the game - \n\n', 'color: red;')
                break
            case 1:
                boss = bosses.sauron
                bossHealth = bosses.sauron.healthPoint
                bossHit = bosses.sauron.hitPoint
                console.log('%c \n - - - S A U R O N - - -  \n\n- just entered the game - \n\n', 'color: red;')
                break
            case 2:
                boss = bosses.lilith
                bossHealth = bosses.lilith.healthPoint
                bossHit = bosses.lilith.hitPoint
                console.log('%c \n - - - L I L I T H - - -  \n\n- just entered the game - \n\n', 'color: red;')
                break
            default:
                break
        }
    }
    bossRandom()
    console.table(boss)

    // GAME  TURN  LOOP 
    let turn = 0
    const turnLoop = () => {

        while (bossHealth > bossHealth / 5 && playerHealth >= 1) {
            // //boss riddle 
            if (bossHealth <= bossHealth / 5) {
                const bossRiddle = () => {
                    let riddle = prompt('How many hobbits does it take to change a lightbulb?', 'color: blue;')
                    if (riddle === 3) {
                        alert('The boss is defeated, you\'ve won the game')
                    }
                    else {
                        alert('GAME OVER, you were crushed...')
                    }
                }
                bossRiddle()
            }

            //player turn function
            const playerTurn = () => {
                let playerAction = confirm('Do you want to attack ? \n (submit for yes, cancel to enter defence mode)')
                switch (playerAction) {
                    case true:
                        playerAttack()
                        console.log('the enemy still have ' + bossHealth + ' health points left')
                        break
                    case false:
                        playerDefence()
                        break
                }
                turn = turn + 1
            }

            // boss turn function
            const bossTurn = () => {
                console.log('the enemy is about to do something... \n He\'s attaking!')
                playerHealth = playerHealth - bossHit
                if (playerHealth >= 1) {
                    console.log('You still have ' + playerHealth + ' health points left')
                } else {
                    console.log('%cY O U    D I E D', 'color: red')
                }
                console.table(player)
                turn = turn++
            }
            bossTurn()
            playerTurn()
        }
        alert('- - - - -__G A M E_______O V E R__- - - - - - ')

    }
    turnLoop()


}
launchGame()