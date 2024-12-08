function peek$1(lookup) {
  // Assuming lookup is some kind of collection (e.g., array, object)
  // and peek$1 is a function to access its first element or value.
  return lookup[0]; // This is just a placeholder implementation.
}

function someFunction() {
  return peek$1(this._lookup);
}

// Example usage:
const obj = {
  _lookup: [10, 20, 30],
  someFunction: someFunction
};

console.log(obj.someFunction()); // Output: 10
