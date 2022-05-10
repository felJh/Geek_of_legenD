let mage = {
    name: '',
    healthPoint: 30,
    hitPoint: 12,
    mana: 7 + 2 * (Math.floor(Math.random() * 3)),
    defense() {},
    attack() {}
}

let warrior = {
    name: '',
    healthPoint: 50,
    hitPoint: 15,
    ragePoint: 0,
    defense() {},
    attack() {}
}
let archer = {
    name: '',
    healthPoint: 35,
    hitPoint: 15,
    defense() {},
    attack() {}
}


export {
    mage,
    warrior,
    archer
}