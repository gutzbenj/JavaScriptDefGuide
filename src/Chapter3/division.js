// Division by zero leads to Infinity

function divideByZero() {
    let x = 5;

    let result = 5 / 0;

    console.assert(result === Infinity);
}

divideByZero();