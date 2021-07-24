// Destructuring of objects/arrays, assertion of reverse constructed objects

function compareArraysOfObjects(a, b) {
    if (a == b) return true;
    if (a.length != b.length) return false;

    for (let i = 0; i < a.length; i++) {
        let eq = JSON.stringify(a[i]) == JSON.stringify(b[i]);

        if (!eq) return false;
    }

    return true;
}

function destructurePoints() {
    let points = [{x: 1, y: 2}, {x: 3, y: 4}];

    let [{x: x1, y: y1}, {x: x2, y: y2}] = points;

    let points2 = [{x: x1, y: y1}, {x: x2, y: y2}];

    console.assert(compareArraysOfObjects(points, points2));
}

destructurePoints();