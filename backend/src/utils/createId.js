

export default function createUniqueId(dataArray) {
    let randomId;
    let isUnique = false;
    while (!isUnique) {
        // get random base-36 string and take 3 characters
        randomId = Math.random().toString(36).substring(2, 5);
        isUnique = !dataArray.some(element => element.id === randomId);
    }
    return randomId;
}