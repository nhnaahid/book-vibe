
const getStoredData = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveData = (keySelf, keyOther, value) => {
    const storedDataSelf = getStoredData(keySelf);
    let storedDataOther = getStoredData(keyOther);
    let isExistSelf = false;
    if (keySelf === 'wishlist') {
        isExistSelf = storedDataOther.find(data => data === value);
        // isExistSelf && 'clicked: wishlist && item in read';
        if (isExistSelf) {
            return 'w2';
        }
    }
    if (!isExistSelf) {
        isExistSelf = storedDataSelf.find(data => data === value);
        // isExistSelf && 'clicked: wishlist/read && item in wishlist/read';
        if (isExistSelf) {
            return 'wr';
        }
    }
    if (!isExistSelf) {
        storedDataSelf.push(value);
        localStorage.setItem(keySelf, JSON.stringify(storedDataSelf));

        if (keyOther === 'wishlist') {
            // let storedDataOther = getStoredData(keyOther);
            const isExistOther = storedDataOther.find(data => data === value);
            if (isExistOther) {
                storedDataOther = storedDataOther.filter(data => data != value);
                localStorage.setItem(keyOther, JSON.stringify(storedDataOther));
            }
            // return 'clicked: read && item not in read'
            return 'r1';
        }
        // return 'clicked: wishlist && item not in wishlist or read'
        return 'w1';
    }
    // return 'clicked: wishlist && item in read';
}

export { getStoredData, saveData };