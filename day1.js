var fs = require('fs');
var a = fs.readFileSync('day1_in.txt').toString().split("\n").map(function(item){
    return parseInt(item, 10);
});
var cnt = 0;
for(var i = 1; i < a.length; i++) {
    if (a[i] > a[i-1])
    cnt++;
}
console.log(`Part 1: ${cnt}`);

cnt = 0
for(var i = 3; i < a.length; i++) {
    if (a[i] + a[i - 1] + a[i-2]> a[i-1] + a[i-2] + a[i-3])
    cnt++;
}
console.log(`Part 2: ${cnt}`);
