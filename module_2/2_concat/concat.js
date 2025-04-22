const concat = (a, b) => [...a, ...b];

const concatOptional = (...arrays) => arrays.reduce((result, array) => [...result, ...array], []);