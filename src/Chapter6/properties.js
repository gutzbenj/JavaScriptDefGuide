// Access undefined properties

let book1 = {};
let book2 = {"author": {"surname": "Max", "name": "Mustermann"}}

let bookArray = [book1, book2]

for (const book of bookArray) {
    let surname = undefined;

    surname = book?.author?.surname;

    console.log(surname);
}

let o = {x: 1, y: 2, z: 3};

for (let p in o) {
    // if (typeof o[p] === "function") continue;
    console.log(p);
}

let target = {x: 1}, source = {y: 2, z: 3};

for (let key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target);