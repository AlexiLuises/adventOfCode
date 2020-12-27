var fs = require("fs");
var text = fs.readFileSync("input.txt", "utf-8");
var textByLine = text.split("\n");



for (let i = 0; i < textByLine.length; i++) {
    var num1 = parseInt(textByLine[i]);

    for (let j = 0; j < textByLine.length; j++) {
        var num2 = parseInt(textByLine[j]);

        for (let q = 1; q < textByLine.length; q++) {
            var num3 = parseInt(textByLine[q]);

            if (num1 + num2 + num3 == 2020) {
                console.log(num1,num2,num3);
                console.log(num1*num2*num3);
            }
        }

    }

}