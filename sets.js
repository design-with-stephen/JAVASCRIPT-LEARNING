// summery

// A Set is a special type collection – “set of values” (without keys),
// where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided
// (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment
// of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// The main feature is that repeated calls of set.add(value) with the same value
// don’t do anything. That’s the reason why each value appears in a Set only once.

// For example, we have visitors coming, and we’d like to remember everyone.
// But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

// Set is just the right thing for that:

let set = new Set();

let john = {
    name: 'John',
    age: 30,
    isMarried: false

}
let peter = {
    name: 'Peter',
    age: 30,
    isMarried: false
}
// adding elements
set.add(john)
set.add(peter)
set.add(john)
// NB some users come multiple times


console.log(set.size);

for (let user of set) {
    console.log(user.name)
}

