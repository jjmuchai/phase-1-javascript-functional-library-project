// myEach: Iterates over each element in a collection and applies a callback
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

// myMap: Creates a new array with results of calling a callback on each element
function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}

// myReduce: Reduces a collection to a single value using a callback function
function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

// myFind: Returns the first element in a collection that satisfies the callback
function myFind(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) return values[i];
    }
    return undefined;
}

// myFilter: Returns a new array with elements that satisfy the callback
function myFilter(collection, callback) {
    let result = [];
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) result.push(values[i]);
    }
    return result;
}

// mySize: Returns the number of elements (or keys) in a collection
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst: Returns the first element or first `n` elements of an array
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast: Returns the last element or last `n` elements of an array
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys: Returns an array of an object's own enumerable property names
function myKeys(object) {
    return Object.keys(object);
}

// myValues: Returns an array of an object's own property values
function myValues(object) {
    return Object.values(object);
}
