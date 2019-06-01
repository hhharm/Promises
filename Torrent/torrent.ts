interface Input {
    chunkCount: number;
    emitter: Emitter;
}

interface Emitter {
    on: (callback: (chunk: Chunk) => void) => void;
}

interface Chunk {
    id: number;
    timestamp: Date;
    data: string;
}

let chunkCount = 3;
let emitter = {
    on: (fn) => {
        fn({id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01')});
        fn({id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03')});
        fn({id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02')});
    }
};

// module.exports = function () {
//     return Promise.resolve('The Good, the Bad and the Ugly');
// }

//timeout : 1 sec
//duplicate:  "Duplicate: <id>"(с id куска текста на месте <id>).
let f = function ({chunkCount, emitter}) {
    let a = emitter.on;
    console.log(a);
    let b = emitter.on;
    console.log(b);
};

f({chunkCount, emitter});