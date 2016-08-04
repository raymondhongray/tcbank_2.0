var istriggerPlane = 0;
var istriggerDottedLines = 0;

function init() {
    // $('.container-01').css('height', $('.menu-bg').height() + 20);

    // $('.container-02').css('height', ($('.pad-bg').height() * 1.5));
    // $('.container-03').css('height', $('.c3_content-bg').height() * 1.5);

    // if ($(window).width() > 1400) {
    //  $('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 1.5));
    // } else {
    //  $('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 2));
    // }
}

function setWalkMan(obj, gender) {
    var num = obj.attr('data-id');

    num = (parseInt(num) + 1) % 4;

    obj.attr('src', 'img/' + gender + num + '.png');
    obj.attr('data-id', num);
}

$(window).load(function() {
    // this will fire after the entire page is loaded, including images
    $('.loading-effect').fadeOut(1000, 'swing');
});

$(document).ready(function() {

    // init();

    var skrollr_obj = skrollr.init();

    setInterval(function() {

        setWalkMan($(".girl-01"), 'girl');
        // setWalkMan($(".man-01"), 'man');
    }, 800);

    var casefilmOffset = $('.casefilm-icon').offset().top - 150;
    $('.btn-casefilm').click(function() {
        $('html,body').animate({
            scrollTop: casefilmOffset
        }, 500);
    });

    var missionOffset = $('.mission-icon').offset().top - 150;
    $('.btn-mission').click(function() {
        $('html,body').animate({
            scrollTop: missionOffset
        }, 800);
    });

    var solutionOffset = $('.solution-icon').offset().top - 150;
    $('.btn-solution').click(function() {
        $('html,body').animate({
            scrollTop: solutionOffset
        }, 1200);
    });

    var resultOffset = $('.result-icon').offset().top - 150;
    $('.btn-result').click(function() {
        $('html,body').animate({
            scrollTop: resultOffset
        }, 1500);
    });
});

// $(window).resize(function() {
//     init();
// });

$(window).scroll(function() {
    // console.log($(window).scrollTop());

    if (!$(".bird-01 .bird-wing").hasClass('wingdown')) {

        $(".bird-01 .bird-wing").addClass('wingdown');

        setTimeout(function() {
            $(".bird-01 .bird-wing").removeClass('wingdown');
        }, 500);
    }

    if (!$(".bird-02 .bird-wing").hasClass('wingup')) {

        $(".bird-02 .bird-wing").addClass('wingup');

        setTimeout(function() {
            $(".bird-02 .bird-wing").removeClass('wingup');
        }, 500);
    }

    if (!$(".bird-03 .bird-wing").hasClass('wingdown')) {

        $(".bird-03 .bird-wing").addClass('wingdown');

        setTimeout(function() {
            $(".bird-03 .bird-wing").removeClass('wingdown');
        }, 500);
    }

    if ($(window).scrollTop() >= ($('.arrow-01').offset().top - 350) && istriggerPlane == 0 && !$(".container-02-plane").hasClass('active')) {
        istriggerPlane = 1;
        $(".container-02-plane").addClass('active');

        setTimeout(function() {

            $(".container-02-plane").remove();
        }, 4000);
    }

    if ($(window).scrollTop() >= ($('.chacha').offset().top - 600) && istriggerDottedLines == 0) {
        istriggerDottedLines = 1;

        $(".dotted-line-01").attr('src', 'img/dotted_line_01.gif');
        $(".dotted-line-02").attr('src', 'img/dotted_line_02.gif');
    }
});
