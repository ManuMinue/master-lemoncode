const clone = (source) => ({ ...source });

const merge = (source, target) => ({ ...target, ...source });