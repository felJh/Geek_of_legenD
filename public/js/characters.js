let mage = {
    name: '',
    healthPoint: 15,
    hitPoint: 12,
    mana: 7 + 2 * (Math.floor(Math.random() * 3)),
    defense() {},
    attack() {}
}

let warrior = {
    name: '',
    healthPoint: 20,
    hitPoint: 12,
    ragePoint: 0,
    defense() {},
    attack() {}
}
let archer = {
    name: '',
    healthPoint: 17,
    hitPoint: 6,
    defense() {},
    attack() {}
}


export {
    mage,
    warrior,
    archer
}