// maps holds key- value pairs where the keys can be any data types
// and the values are always strings
// a map remembers the original insertions order of the keys

// maps are objects

// creating maps in javascript

const fruits = new Map([
    ["apple", 5],
    ["banana", 10],
    ["cherry", 15],
])

//adding elements to a map (-> use the set() method)

fruits.set("apple", 40);
fruits.set("grape", 20);

console.log(fruits);

// accessing elements in a map (-> use the get() method)
const result = fruits.get("banana")
console.log(result); // undefined
