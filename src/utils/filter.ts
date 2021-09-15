export const filterData = (data: any, name: string, type: string, level: string, monsterType: string, attribute: string, cardType: string) => {
    const filteredData = data.filter((element: any) => {
        return ((name !== '' ? (element.name.toLowerCase().includes(name) || element.name.toLowerCase() === name.toLowerCase()) : true) && (type !== '' ? (element.race && (element.race.toLowerCase() === type.toLowerCase())) : true) && (level !== '' ? (element.level == level) : true) && (attribute !== '' ? (element.attribute && (element.attribute.toLowerCase() === attribute.toLowerCase())) : true) && (cardType !== '' ? (cardType.toLowerCase() === 'monster' ? (monsterType !== '' ? (element.type.toLowerCase().includes(monsterType.toLowerCase())) : element.type.toLowerCase().includes('monster')) : (cardType.toLowerCase() === element.type.toLowerCase())) : true))
    })
    return filteredData;
}