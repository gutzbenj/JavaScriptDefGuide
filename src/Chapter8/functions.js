function max(first=-Infinity, ...rest) {
    let maxValue = first;
    for (let r of rest) {
        maxValue = r > maxValue ? r : maxValue;
    }

    return maxValue;
}

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));