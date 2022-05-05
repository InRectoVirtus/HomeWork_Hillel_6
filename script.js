/*
Написать функцию `compress(list)`, которая сжимает серии массива, состоящего из единиц и нулей по следующему принципу:
например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] преобразуется в [4,7,2,4,1,1]
*/

function compress(list) {
    let sumSameNumbers = 1;
    let arrSameNumbers = [];

        for (let i = 0; i < list.length; i++){
            if(list[i] !== 1 && list[i] !== 0) {
                return `you have in array another numbers`;
            } else if (list[i] === list[i + 1]) {
                sumSameNumbers++;
            } else {
                arrSameNumbers.push(sumSameNumbers);
                sumSameNumbers = 1;
            }
        }
        return arrSameNumbers;  
};
var a = 1;
console.log(compress([1,1,1,1,1,0]));
console.log(compress([0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1]));
console.log(compress([0,0,0,3,1,1,1,1,4,1,1,0,0,1,1,1,1,0,1]));