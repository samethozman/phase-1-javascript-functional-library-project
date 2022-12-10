function myEach(collection, callback) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    for (let i = 0; i < x.length; i++) {
        callback(x[i])
        }
    return collection
}

function myMap(collection, callback) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    const newCollection = []
    for (let i = 0; i < x.length; i++) {
        const newItem = callback(x[i])
        newCollection.push(newItem)
        }
    return newCollection
}

function myReduce(collection, callback, acc) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    let currentValue = acc
    if (typeof acc !== 'number') {
        currentValue = x[0]
        for (let i = 1; i < x.length; i++) {
            currentValue = callback(currentValue, x[i], x)
        }
    }
    else {
        for (let i = 0; i < x.length; i++) {
            currentValue = callback(currentValue, x[i], x)
        }
    }
    return currentValue
}

function myFind (collection, predicate) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    for (let i = 0; i < x.length; i++) {
        if (predicate(x[i])) {
            return x[i]
        }
    }
    return undefined
}

function myFilter (collection, predicate) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    const newCollection = []
    for (let i = 0; i < x.length; i++) {
        if (predicate(x[i])) {
            newCollection.push(x[i])
        }
    }
    return newCollection
}

function mySize (collection) {
    let x = [...collection]
    if (collection instanceof Array === false) {
        x = Object.values(collection)
    }
    return x.length
}

function myFirst (array, n) {
    if (typeof n !== 'number') {
        return array[0]
    }
    else {
        let newArray = []
        for (let i = 0; i < n; i++) {
            newArray.push(array[i])
        }
        return newArray
    }
}

function myLast (array, n) {
    if (typeof n !== 'number') {
        return array[array.length - 1]
    }
    else {
        let newArray = []
        for (let i = 1; i <= n; i++) {
            newArray.unshift(array[array.length-i])
        }
        return newArray
    }
}

function myKeys (object) {
    const arrOfKeys = []
    for (let key in object) {
        arrOfKeys.push(key)
    }
    return arrOfKeys
}

function myValues (object) {
    const arrOfValues = []
    for (let key in object) {
        arrOfValues.push(object[key])
    }
    return arrOfValues
}