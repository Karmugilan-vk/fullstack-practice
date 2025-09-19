const num = [18,7,6,5,10,15];
const oddNum = num.filter(n => n % 2 !== 0).map(n => n * n);
console.log(oddNum);