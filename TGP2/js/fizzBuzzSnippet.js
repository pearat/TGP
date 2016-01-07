$('#fizzBuzzBtn').click(function () {
    var fz = Number($(fizz).val());
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
}); // end fizzBuzzBtn