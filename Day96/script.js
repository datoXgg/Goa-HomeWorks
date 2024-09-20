let array = [1, 2, 3, 4, 3, 2, 5];
let numSet = new Set();

array.forEach(num => {
    if (!numSet.has(num)) {
        numSet.add(num);
    }
});
console.log(numSet);


let myMap = new Map();
myMap.set('name', 'dato');
myMap.set('age', 15);
myMap.set('city', 'batumi');

console.log(myMap);


let anotherMap = new Map();
anotherMap.set('a', 100);
anotherMap.set('b', 200);
anotherMap.set('c', 300);

console.log(anotherMap);

anotherMap.delete('b');
console.log(anotherMap);


let mySet = new Set([10, 20, 30, 40]);
console.log(mySet);

mySet.clear();
console.log(mySet);


class CollectionManager {
    constructor() {
        this.myMap = new Map();
        this.mySet = new Set();
    }

    addToMap(key, value) {
        this.myMap.set(key, value);
    }

    removeFromMap(key) {
        this.myMap.delete(key);
    }

    addToSet(item) {
        this.mySet.add(item);
    }

    clearSet() {
        this.mySet.clear();
    }

    showMap() {
        console.log('Map Contents:');
        this.myMap.forEach((value, key) => {
            console.log(key + ": " + value);
        });
    }

    showSet() {
        console.log('Set Contents:');
        this.mySet.forEach(item => {
            console.log(item);
        });
    }
}

let manager = new CollectionManager();
manager.addToMap('name', 'giorgi');
manager.addToMap('job', 'police');
manager.showMap();

manager.removeFromMap('name');
manager.showMap();

manager.addToSet('apple');
manager.addToSet('banana');
manager.showSet();

manager.clearSet();
manager.showSet();
