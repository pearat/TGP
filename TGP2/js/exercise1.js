$(document).ready(function () {

    $('#numSeriesBtn').click(function () {

        var numString = $(numSeries).val();
        var numStringArray = numString.split(/\s|,|\/|\\/); // .split(/\D^-/);
        console.log("Whole array after split [" + numStringArray + "]");
        var numArray = [];
        var len =numStringArray.length; 
        if (len < 3) {
            $('#results').html("<p class='warn'>Only <u>"
                               +len+"</u> number(s) entered.<br>Please enter more numbers.<\p>");
            } else {
                for (i = 0; i < len; i++) {
                    numArray[i] = Number(numStringArray[i]);
                }

                numStats = calculateStatistics(numArray);

                $('#results').html("<p> min: " + addCommas(numStats.min) + "<\p>"+
                "<p> max: " + addCommas(numStats.max) + "<\p>"+
                "<p> mean: " + addCommas(numStats.mean.toFixed(2)) + "<\p>"+
                "<p> sum: " + addCommas(numStats.sum) + "<\p>"+
                "<p> product: " + addCommas(numStats.product.toFixed(2)) + "<\p>");

        }
        $('#results').css('visibility', 'visible');
    });


    $('#factorialBtn').click(function () {
        var numFact = $(numFactorial).val();
        console.log("numFact: " + numFact);
        numFact = factorial(numFact);
        $('#factorialResult').html("<p> Factorial: " + addCommas(numFact) + "<\p>");
        $('#factorialResult').css('visibility', 'visible');
    });


    $('#fizzBuzzBtn').click(function () {

        var fz = Number($(fizz).val()); // make sure > 0, < 101
        var bz = Number($(buzz).val());

        var s = ss = "";
        for (j = 1; j <= 100; j++) {
            s = "";
            if (j % fz == 0) s += "fizz";
            if (j % bz == 0) s += "buzz";
            if ((j % fz != 0) && (j % bz != 0)) {
                s += j;
                if (j < 10) s += "...";
                else s += "..";
            }
            if ((j % fz == 0) && (j % bz == 0)) {
                s += ".";
                s = s.toUpperCase();
            }
            s += ".";
            if (j % 10 == 0) s += "<br>";
            ss += s;
        }
        ss += "\n";
        $('#fizzBuzzResult').html(ss);
        $('#fizzBuzzResult').css('visibility', 'visible');
    });

    $('#palindromeBtn').click(function () {

        var checkWord = $(paliWord).val().trim().toLowerCase(); // check whether null
        var reverseWord = checkWord.split('').reverse().join('');
        isPalindrome = (checkWord == reverseWord) ? 'TRUE' : 'FALSE';

        isPalindrome = (checkWord == reverseWord) ? ' is a Palindrome!' : ' is not a Palindrome.';
        
        $('#palindromeResult').html(checkWord.toUpperCase() + isPalindrome).css('visibility', 'visible');
        
    });

});

function calculateStatistics(nArray) {
    var minN = Infinity;
    var maxN = -Infinity;
    console.log("Infinity: " + Infinity);
    var x = sumN = meanN = 0;
    var productN = 1;

    if (i > 0) {
        for (i = 0; i < nArray.length; i++) {
            x = nArray[i];
            minN = (x < minN ? x : minN);
            maxN = (x > maxN ? x : maxN);
            sumN += x;
            productN *= x;
        }
        console.log('i = :' + i);
        meanN = sumN / i;
    }
    stats = {
        'min': minN,
        'max': maxN,
        'mean': meanN,
        'sum': sumN,
        'product': productN
    };
    return stats;
} // end calculate statistics

function factorial(n) {
    console.log("n: " + n);
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
} // end factorial

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}