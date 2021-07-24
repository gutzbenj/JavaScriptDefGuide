// Check property access

function checkPropertyAccess () {
    let anObject = {propertyA: {a: 1}, propertyB: {a: 2}}; // propertyC missing

    // Hard access to non-existent property casts error
    try {
        let wantedProperty = anObject.propertyC.a
    } catch (error) {
        console.assert(error == "TypeError: Cannot read property 'a' of undefined");
    }

    // Permissive access casts no error
    let wantedProperty = anObject.propertyC?.a | 0;

    console.assert(wantedProperty == 0);
}

checkPropertyAccess();