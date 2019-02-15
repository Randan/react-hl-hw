const array = [1, 1, 2, 3, 1, 3, 1];

console.log(array);

const arraySet = new Set();

for(let i = 0; i < array.length; i++) {
    arraySet.add(array[i]);
}

console.log(arraySet);