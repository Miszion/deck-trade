export const constructLevelList = () => {
    const optionArray : Array<{name: string, value: string}> = []
    for (let i = 0; i <= 12; i++) {
        if (i == 0) {
            optionArray.push({
                name: "",
                value: ""
            })
        }
        else {
            optionArray.push({
                name: i.toString(),
                value: i.toString()
            })
        }
    }
    return optionArray
}

export const constructTypeList = () => {

    const typeArray = ["", "Aqua", "Beast", "Beast-Warrior", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"]

    const typeList = []

    for (var i in typeArray) {
        typeList.push({
            name: typeArray[i],
            value: typeArray[i].toLowerCase()
        })
    }
    return typeList
}

export const constructCardTypeList = () => {

    const cardArray = ["", "Monster", "Spell Card", "Trap Card"]

    const cardList = []

    for (var i in cardArray) {
        cardList.push({
            name: cardArray[i],
            value: cardArray[i].toLowerCase()
        })
    }
    return cardList
}

export const constructAttributeList = () => {

    const attributeArray = ["", "Dark", "Divine", "Earth", "Fire", "Light", "Water", "Wind"]

    const attributeList = []

    for (var i in attributeArray) {
        attributeList.push({
            name: attributeArray[i],
            value: attributeArray[i].toLowerCase()
        })
    }
    return attributeList
}

export const constructMonsterTypeList = () => {
    const monsterArray = ["", "Normal", "Effect", "Ritual", "Fusion", "Synchro", "Xyz", "Pendulum", "Link"]

    const monsterList = []

    for (var i in monsterArray) {
        monsterList.push({
            name: monsterArray[i],
            value: monsterArray[i].toLowerCase()
        })
    }
    return monsterList
}