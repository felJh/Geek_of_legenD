import * as bosses from './bosses.js'
import * as classes from './characters.js'




const launchGame = () => {
    let player
    let playerHit
    let playerHealth
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

        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.warrior.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a feared warrior \n`, 'color: green;')
    }
    else if (characterLow === 'archer') {
        player = classes.archer
        playerHealth = classes.archer.healthPoint
        playerHit = classes.archer.hitPoint

        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.archer.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a very skilled archer \n`, 'color: green;')
    }
    else if (characterLow === 'mage') {
        player = classes.mage
        playerHealth = classes.mage.healthPoint
        playerHit = classes.mage.hitPoint

        //name the character
        let name = prompt('enter you\'re character\'s name:')
        classes.mage.name = name
        console.log(`%c Salutations,  ${name}! \n \nYou are a very powerful mage\n`, 'color: green;')
    }
    else {
        console.log('Please choose between \'warrior\', \'mage\' or \'archer\'')
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
    bossRandom(player)
    console.table(boss)

    // GAME  TURN  LOOP 
    const bossAttack = () => {
        this.playerHealth = playerHealth - bossHit
        console.log(`%cOh no, you've lost ${bossHit} health points`, 'color: orange;')
        console.table(player)
    }


    let turn = 0
    const turnLoop = () => {

        while (bossHealth > 0 || playerHealth > 0) {
            // //boss riddle 
            // if (bossHealth <= bossHealth / 5) {
            //     riddle()
            // }
            //boos turn function
            const bossTurn = () => {
                console.log('the enemy is about to do something... \n He\'s attaking!')
                bossAttack()
                turn = turn + 1
            }
            //player turn function
            const playerTurn = () => {
                let playerAction = confirm('Do you want to attack ? \n (submit for yes, cancel to enter defence mode)')
                switch (playerAction) {
                    case true:
                        player.attack()
                        break
                    case false:
                        player.defence()
                        break
                }
                turn = turn + 1
            }
            bossTurn()
            playerTurn()
        }
    }
    turnLoop()


    console.table(player)
}
launchGame()