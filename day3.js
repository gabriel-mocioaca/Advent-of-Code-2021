var fs = require('fs');
var array = fs.readFileSync('day3_in.txt').toString().split("\n");

part1();
part2();

function part1(){
    var gama = 0;
    var epsilon = 0;

    for (var bitPosition = array[0].length - 1; bitPosition >= 0; bitPosition--){
        var cnt1 = count1(array, bitPosition);
        var cnt0 = array.length - cnt1;

        gama = gama + (2 ** (array[0].length - bitPosition - 1)) * (cnt1 > cnt0 ? 1 : 0);
        epsilon = epsilon + (2 ** (array[0].length - bitPosition - 1)) * (cnt1 > cnt0 ? 0 : 1);
    }

    console.log(`Part 1: ${gama * epsilon}`);
}

function part2(){
    var len = array[0].length;
    var copyArray = array;
    for (var bitPosition = 0; bitPosition < len; bitPosition++){
        var cnt1 = count1(copyArray, bitPosition);
        var toKeep = (cnt1 >= (copyArray.length / 2)) ? "1" : "0";
        copyArray = copyArray.filter(value => value[bitPosition] == toKeep);
        if(copyArray.length == 1) break;
    }

    var oxygenGeneratorRating = parseInt(copyArray[0], 2);

    var len = array[0].length;
    var copyArray = array;
    for (var bitPosition = 0; bitPosition < len; bitPosition++){
        var cnt1 = count1(copyArray, bitPosition);
        var toKeep = (cnt1 < (copyArray.length / 2)) ? "1" : "0";
        copyArray = copyArray.filter(value => value[bitPosition] == toKeep);
        if(copyArray.length == 1) break;
    }

    var CO2ScrubberRating = parseInt(copyArray[0], 2);

    console.log(`Part 2: ${oxygenGeneratorRating * CO2ScrubberRating}`);
}

function count1(array, position){
    var cnt = 0;
    for (var index = 0; index < array.length; index++){
        if (array[index][position] == "1")
            cnt++;
    }
    return cnt;
}
