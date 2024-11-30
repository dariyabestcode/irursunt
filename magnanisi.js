const channelDef = {
    condition: [1, 2, 3],
    value: 0
};

function reducer(accumulator, currentCondition) {
    return accumulator + currentCondition;
}

const result = vega.array(channelDef.condition).reduce(reducer, channelDef.value);
console.log(result); // Outputs: 6 (0 + 1 + 2 + 3)
