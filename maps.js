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
console.log(result); //

// to return the size of a map use the map.size property, it will return the number of elements in the map

// example

fruits.size;
console.log(fruits.size);  // it will return 4

// to delete an element in the map use the delete() function

fruits.delete("apple");

console.log(fruits)


// to remove all the elements from a map the, clear() method can be use, this will clear all the elements in a map

fruits.clear();

console.log(fruits)

// to check the existence of element in a map, the has() method is used

const exist = fruits.has("apple")

if (exist) {
    console.log("item exist")
} else {
    console.log("item does not exist")
}


// summery

// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that
// Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.






// Iteration over Map
// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.



const animals = new Map([
    ["dog", 5],
    ["cat", 4],
    ["cow", 3],
    ["goat",2]
])

//iterating over the keys
for (let domestic of animals.keys()) {
    console.log(domestic)
}

// iterating over values or amount

for (let amount of animals.values()) {
    console.log(amount)
}

// iterating over entries, it iterates over the keys and value in a map


for (let entry of animals.entries()) {
    console.log(entry);
}

// NB
//  the insertion order of the elements in the map is preserved, unlike in objects hence
//  the order of the elements in iteration result



// to loop through maps , the forEach() loop can be used for example
// the forEach loop in map is a built in method that can also be used
// to iterate through maps , it is similar to arrays 

const allFruits = new Map([
    ["apple", 5],
    ["banana", 10],
    ["cherry", 15],
])

let i = "";
allFruits.forEach((value, key) => {
    i += ` ${key} : ${value}`;
    console.log(i);
})


// Objects.entries: Map from object

//When a map is created, aan array can be passed or another iterable
// with key/value pairs for initialization , like

let map = new Map(
    [
        ["1", "value1"],
        [1, "value2"],
        [true, "value3"],
    ]
);

console.log(map.get("1"))

// To create a plain object, and we’d like to create a
// Map from it, then we can use built-in method
// Object.entries(obj) that returns an array of key/value
// pairs for an object exactly in that format.

// So we can create a map from an object like this:


let obj = {
    name: "peter",
    age: 25
};

let mapFromObjects = new Map(Object.entries(obj));
// map is now a map with the key/value pairs from obj

console.log(mapFromObjects);
console.log(mapFromObjects.get("name"))

//Object.fromEntries: Object from Map
// We’ve just seen how to create Map from a plain object
// with Object.entries(obj).
// There’s Object.fromEntries method that does the reverse:
// given an array of[key, value] pairs, it creates an object from
// them:

let prices = Object.fromEntries([
    ["banana", 1],
    ["Orange", 2],
    ["Apple", 3]
  ]
)
// now an object has been created from the map
console.log(prices);
console.log(prices.Apple);

// the object.fromEntries method can be
// used to get a plain object from a map

let myMap = new Map();

myMap.set("banana", 1);
myMap.set("Orange", 2);
myMap.set("Apple", 3);
// now a map has been created with the key/value
// pairs from the object

let objPlain = Object.fromEntries(myMap.entries())

console.log(objPlain);
console.log(objPlain.Orange)


// a call on map.entries will return the iterable value pairs,

let xzObj = Object.fromEntries(myMap);
console.log("xz:" + xzObj)


// That’s the same, because Object.fromEntries expects
// an iterable object as the argument.Not necessarily
//  an array.And the standard iteration for map returns
//  same key / value pairs as map.entries().So we get a
//  plain objectwith same key / values as the map.




