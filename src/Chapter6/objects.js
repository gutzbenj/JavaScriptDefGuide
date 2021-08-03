// Creating objects

let createObjects = () => {
    let o1 = new Object();
    let o2 = Object.create(Object.prototype);
    let o3 = {};

    console.log(typeof o1);
    console.log(typeof o2);
    console.log(typeof o3);

    console.assert(typeof o1 == typeof o2 && typeof o1 == typeof o3);
}

let testAgainstModification = () => {
    let a = {"prop": "a"}

    let amod = modifyObject(a);

    let b = {"prop": "b"}

    let bmod = modifyObject(Object.create(b));

    console.assert(a.prop == amod.prop);
    console.assert(b.prop != bmod.prop);
}

let modifyObject = (obj) => {
    obj["prop"] = "c"

    return obj
}

createObjects();
testAgainstModification();