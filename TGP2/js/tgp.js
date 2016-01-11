// JavaScript source code


$(document).ready(function () {

    $('[data-toggle="popover"]').popover({
        placement: 'bottom'
    });
 

    // ***** ABOUT: Question & Answers ***** //
    $("#answer1").hide();
    $(".ffo1").on("click",function () {
        $(".question1").toggle();
    }); 
        
    $("#answer2").hide();
    $(".ffo2").on("click", function () {
        $(".question2").toggle();
    });

    $("#answer3").hide();
    $(".ffo3").on("click", function () {
        $(".question3").toggle();
    });

    $("#answer4").hide();
    $(".ffo4").on("click", function () {
        $(".question4").toggle();
    });
    
    
    function hoverResumeDetail(hide) {
        
        if (hide) {
            $('.jobDetail-col').css('opacity', 0.01);
            $(".jobDetail-col").hover(function () {
                $(this).animate({ 'opacity': 1 }, 400);
            }, function () {
                $(this).animate({ 'opacity': 0.01 }, 1000);
            });
        }
        else {
            $('.jobDetail-col').unbind('hover');
            $(".jobDetail-col").css('opacity', 1);
        }
    }


    hoverResumeDetail(true);

    $("#freezeBtn").toggle(function () {
        hoverResumeDetail(false);
        $("#freezeBtn").text("Mask detail");
    }, function () {
        hoverResumeDetail(true);        
        $("#freezeBtn").text("Show detail");    
    });
    
    
    $('.tgpFacebook').on('click',function () {
        alert("clicked Facebook image");
        //$(tgpFacebook).attr('href', "https://www.facebook.com/public/Tim-Peara");
    });
    

    $('#numSeriesModal').on('shown.bs.modal', function () {
        $(this).find('input:first').focus();
    });
    $('#numSeries').keyup(function (event) {
        if (event.keyCode == '13') {
            $('#numSeriesBtn').click();
        }
    });
    $('#numSeriesBtn').click(function ()  {

        var numString = $(numSeries).val();
        var numStringArray = numString.split(/\s|,|\/|\\/); // .split(/\D^-/);
        console.log("Whole array after split [" + numStringArray + "]");
        var numArray = [];
        var len = numStringArray.length;
        if (len < 3) {
            $('#results').html("<p class='warn'>Please enter more numbers.<\p>");
            
        } else {
            for (i = 0; i < len; i++) {
                numArray[i] = Number(numStringArray[i]);
            }

            numStats = calculateStatistics(numArray);

            $('#results').html("<p> min: " + addCommas(numStats.min) + "<\p>" +
            "<p> max: " + addCommas(numStats.max) + "<\p>" +
            "<p> mean: " + addCommas(numStats.mean.toFixed(2)) + "<\p>" +
            "<p> sum: " + addCommas(numStats.sum) + "<\p>" +
            "<p> product: " + addCommas(numStats.product.toFixed(2)) + "<\p>");

        }
        $('#results').css('visibility', 'visible');
    });



    $('#factorialModal').on('shown.bs.modal', function () {
        $(this).find('input:first').focus();
    });
    $('#numFactorial').keyup(function (event) {
        if (event.keyCode == '13') {
            $('#factorialBtn').click();
        }
    });
    $('#factorialBtn').click(function () {
        var numFact = $(numFactorial).val();
        numFact = factorial(numFact);
        $('#factorialResult').html("<p>n! = " + addCommas(numFact) + "<\p>");
        $('#factorialResult').css('visibility', 'visible');
    });


    $('.digitsOnly').keyup(function () {
        var v = this.value.replace(/[^0-9]/g, '');
        //if (this.value != v) {
            this.value = v;
        //}
    });
    $('#fizzBuzzModal').on('shown.bs.modal', function () {
        $(this).find('input:first').focus();
    });
    $('#buzz').keyup(function (event) {
        if (event.keyCode == '13') {
            $('#fizzBuzzBtn').click();
        }
    });
    $('#fizzBuzzBtn').click(function () {

        var s = ss = '';
        if ($('#fizz').val()=='' || $('#buzz').val()=='') {
            ss += 'Enter a number in each box.<br />';
        }
        else {
            var fz = Number($(fizz).val());
            var bz = Number($(buzz).val());
            if (fz < 1 || bz < 1) ss += 'Numbers can\'t be less than 1.<br/>';
            if (fz > 100 || bz > 100) ss += 'Numbers can\'t be more than 100.<br/>';
            if (fz != Math.round(fz) || bz != Math.round(bz)) ss += 'Integers only, please.<br/>';
            if (fz > bz) {
                var x = fz;
                fz = bz;
                bz = x;
                $(fizz).val(fz);
                $(buzz).val(bz);
            }
        }

        if (ss == "") {
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
        } else {
            ss += 'Please try again.';
        }
        
        $('#fizzBuzzResult').html(ss);
        $('#fizzBuzzResult').css('visibility', 'visible');
    });


    $('#palindromeModal').on('shown.bs.modal', function () {
        $(this).find('input:first').focus();
    });
    $('#paliWord').keyup(function (event) {
        if (event.keyCode == '13') {
            $('#palindromeBtn').click();
        }
    });
    $('#palindromeBtn').click(function () {

        var checkWord = $(paliWord).val().match(/[^_\W\d]+/g).join('').toUpperCase();
                    
        if (checkWord.length < 1) {
           // $('#palindromeResult').html("<p class='warn'>Please enter at least 1 character.<\p>");
            $('#palindromeResult').popover({
                placement: 'bottom',
                content: '<p>Please enter at least 1 character</p>'
            });
        } else {
            var reverseWord = checkWord.split('').reverse().join('');
            isPalindrome = (checkWord == reverseWord) ? 'TRUE' : 'FALSE';

            isPalindrome = (checkWord == reverseWord) ? ' is a Palindrome!' : ' is not a Palindrome.';

            $('#palindromeResult').html(checkWord + isPalindrome).css('visibility', 'visible');
        }
    });



    $('.modal').on('hidden.bs.modal', function () {
        $('.results').css('visibility', 'hidden');
        $('.modalInput').val('');

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



});