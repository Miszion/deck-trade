export const filterData = (data: any, name: string, type: string, level: string, monsterType: string, attribute: string, cardType: string) => {
    const filteredData = data.filter((element: any) => {
        return ((name !== '' ? (element.name.toLowerCase().startsWith(name) || element.name.toLowerCase() === name.toLowerCase()) : true) && (type !== '' ? (element.race.toLowerCase() === type.toLowerCase()) : true) && (level !== '' ? (element.level == level) : true) && (attribute !== '' ? (element.attribute.toLowerCase() === attribute.toLowerCase()) : true))
    })
    return filteredData;
}