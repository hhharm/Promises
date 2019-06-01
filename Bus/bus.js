module.exports = function (names) {
    var index;
    var res = [['0'],['1'],['2'],['3'],['4'],['5'],['6'],['7'],['8'],['9'],['А-Я']];
    names.forEach(function(name){
        if (name[0].match("[0-9]") != null) {
         index = +name[0];
        } else {
            index = 10;
        }
        res[index].push(name);
    });
    return res.filter(array => array.length > 1);;
};

