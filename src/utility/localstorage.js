const getStoredData = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveData = (keySelf, keyOther, value) => {
    const storedDataSelf = getStoredData(keySelf);
    const isExistSelf = storedDataSelf.find(data => data === value);
    if (!isExistSelf) {
        storedDataSelf.push(value);
        localStorage.setItem(keySelf, JSON.stringify(storedDataSelf));
    }
    
    if (keyOther === 'wishlist') {
        const storedDataOther = getStoredData(keyOther);
        const isExistOther = storedDataOther.find(data => data === value);
        if (!isExistOther) {
            storedDataOther.push(value);
            localStorage.setItem(keyOther, JSON.stringify(storedDataOther));
        }
    }

}

export { getStoredData, saveData };