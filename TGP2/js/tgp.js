// JavaScript source code


$(document).ready(function () {

    /***** Question & Answers *****/
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
    
    //$(this).closest('.expTitle').next('.experience:last').css('visibility', 'hidden');

    $('.jobDetail-col').css('opacity',0.1);
    // $('.experience').animate({ opacity: 0 } );

    $(".jobDetail-col").hover(function () {
        $(this).animate({ 'opacity': 1 }, 500);
        //$(this).css("background-color", "lightgreen");
        //$(this).closest('.expTitle').css("background-color", "pink");
        //$(this).closest('.expTitle').next('.experience').css("background-color", "lightblue");

        //$(this).closest('.expTitle').next('.experience:last').css("background-color", "purple");
        //$(this).closest('.expTitle').next('.experience').find('.jobDetail-col').css("background-color", "gold");
        // $(this).closest('.expTitle').next('.experience').find('.jobDetail-col').animate({ 'opacity': 1 }, 500);
        // $(this).closest('.expTitle').next('.jobDetail-col').fadeIn(400).css("background-color", "orange");
        // $(this).closest('.expTitle').next('.experience').css("background-color", "orange");
    }, function () {
        
        $(this).animate({ 'opacity': 0.1 }, 2000);
    });


});