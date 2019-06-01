
f = function (diffs) {
    let new_diffst = [];
    let xShift = 0;
    let yShift = 0;
    diffs.forEach((diff) => {
        let x,y;
        if (diff[0] === 0) {
            x = 0;
        } else {
            if (xShift === 0) {
                x = 1;
                xShift = 1;
            } else {
                x = -1;
                xShift = 0;
            }
        }
        if (diff[1] === 0) {
            y = 0;
        } else {
            if (yShift === 0) {
                y = 1;
                yShift = 1;
            } else {
                y = -1;
                yShift = 0;
            }
        }
        new_diffst.push([x,y]);
    });
    if (xShift === 0 && yShift === 0) {
        return new_diffst;
    } else {
        return null;
    }
};