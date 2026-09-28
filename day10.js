let transactions = [200, -50, 450, -100, 300];

let totalBalance = transactions.reduce(function(accumulator, currentItem) {
    return accumulator + currentItem;
}, 0);

let positiveEarnings = transactions.filter(function(item) {
    return item > 0;
}).reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log("All Transactions:", transactions);
console.log("Net Balance:", totalBalance);
console.log("Total Positive Earnings:", positiveEarnings);