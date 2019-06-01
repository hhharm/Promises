// В сервисе Жени есть цепочка серверов, где каждый сервер 
// n
//  берет данные от сервера 
// n − 1
// , обрабатывает их и передает серверу 
// n + 1. Первый сервер генерирует данные сам, а последний посылает отчет на почту Жене.
// Однажды Женя увидел, что в отчете неправильные дынные. Один из серверов в цепочке неправильно обработал данные, а вместе с ним данные стали неправильными и на всех последующих серверах.
// Помогите Жене как можно быстрее найти проблемный сервер.

// Формат ввода
// const servers = [  
//     ’srv-a’, // ok  
//     ’srv-b’, // fail  
//     ’srv-c’, // fail  
//     ’srv-d’  // fail  
// ];  
 
// const check = (name) => new Promise((res) => setTimeout(res, 100)).then(() => name === ’srv-a’);
// Формат вывода
// srv-b
// Примечания
// Вам дается массив серверов, которые начинают сбоить начиная с какого-то сервера. Проверка работоспособности сервера осуществляется асинхронно и возвращает Promise<boolean>. Одновременно проверять на работоспособность можно только один сервер.
// Необходимо написать функцию, которая на вход получит список серверов (
// s
// e
// r
// v
// e
// r
// s
// .
// l
// e
// n
// g
// t
// h
// <
// 1
// 0
// 0
// 0
// 0
// ) и функцию проверки, а вернет Promise, который зарезолвится адресом первого упавшего сервера.
// Решение должно вызывать функцию проверки минимально возможное количество раз. Нельзя использовать async/await и генераторы.
// Решение необходимо предоставить в виде CommonJS-модуль:

// module.exports = function (servers, check) {  
//     // Your code here.  
// };
// Вердикт RE также означает, что отправленное решение неверно.

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
