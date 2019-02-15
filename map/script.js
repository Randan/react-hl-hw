const array = [1, 1, 2, 3, 1, 3, 1];

console.log(array);

let arrayMap = new Map();
let currentValue;

for(let i = 0; i < array.length; i++) {
    currentValue = arrayMap.get(array[i])

    arrayMap.has(array[i])
        ? arrayMap.set(array[i], currentValue + 1)
        : arrayMap.set(array[i], 1);
}

console.log(arrayMap);