const servers = [
    'srv-v', // ok
    'srv-c', // fail
    'srv-b', // fail
    'srv-a'  // fail
];

let check = (name) => new Promise((res) => {
    setTimeout(() => {
        res(name !== 'srv-a');
    })
});


let f = function (servers, check) {
    let start = 0, end = servers.length - 1;
    return new Promise((res) => {
        (function loop(start, end) {
            let mid = Math.floor((start + end) / 2);
            if (start < end) {
                let s = start, e = end;
                check(servers[mid])
                    .then((value) => {
                        if (value) {
                            s = mid + 1;
                            return new Promise((res) => res());
                        } else {
                            e = mid;
                            return new Promise((res) => res());
                        }
                    })
                    .then(() => new Promise((res) => res()).then(loop.bind(null, s, e)))
            } else {
                res(start);
            }
        })(start, end);
    });
};


f(servers, check).then(res => console.log("RESOLVED: ", res));