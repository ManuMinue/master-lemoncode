const head = ([first, ...rest]) => first;

const tail = ([first, ...rest]) => rest;

const init = (array) => array.slice(0, -1);

const last = (array) => array.at(-1);