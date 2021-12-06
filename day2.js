var fs = require('fs');
var input = fs.readFileSync('day2_in.txt').toString().split("\n").map(function(item){
    item = item.split(" ");
    item[1] =  parseInt(item[1], 10);
    return item;
});

part1();
part2();

function part1(){
    var horizontal = 0;
    var depth = 0;
    input.forEach(element => {
        if(element[0] == 'forward') horizontal += element[1];
        if(element[0] == 'down') depth += element[1];
        if(element[0] == 'up') depth -= element[1];
    });
    console.log(`horizontal: ${horizontal}, depth: ${depth}, result: ${horizontal * depth}`);
}

function part2(){
    var aim = 0;
    var horizontal = 0;
    var depth = 0;
    input.forEach(element => {
        if(element[0] == 'forward'){
            horizontal += element[1];
            depth += aim * element[1];
        }
        if(element[0] == 'down') aim += element[1];
        if(element[0] == 'up') aim -= element[1];
    });
    console.log(`horizontal: ${horizontal}, depth: ${depth}, result: ${horizontal * depth}`);
}