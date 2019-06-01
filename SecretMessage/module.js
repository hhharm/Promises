let inputData = [
    {
        geometry: [Number.MAX_VALUE, 0],
        text: 'Bond'
    },
    {
        geometry: [Number.MAX_VALUE, 0],
        text: 'James'
    },
    {
        geometry: [Number.MAX_VALUE, 0],
        text: 'Bond'
    },
];
const inputDictionary = ['James', 'Bond'];
const f = function (inputData, inputDictionary) {
    inputData.sort((a, b) => a.geometry[0]-b.geometry[0]);
    const textMessages = inputData.map(item => item.text);
    const unknownWordPresent = textMessages.some(word => inputDictionary.indexOf(word) === -1);
    return unknownWordPresent ? "Unreadable message" : textMessages.join(' ');
};

console.log(f(inputData, inputDictionary));
