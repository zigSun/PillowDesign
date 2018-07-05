var $ = require('jquery');
        require('jquery-ui-browserify');

var fontList = require('../datalists/fontList');
var calcPrice = require('../utils/calcPrice');

function initTextComponent() {
    setElementsToPage();
    setEvents();
}

function fontSelectComponent(selectID, fontList) {
    fontList.map(function (font) {
        $(selectID).append(`<option value=${font.value} data-option=${font.option}>${font.text}</option>`);
    });
}

function setElementsToPage() {
    fontSelectComponent('#pillow-model-font', fontList);
    fontSelectComponent('#pillow-advanced-front-font', fontList);
    fontSelectComponent('#pillow-advanced-back-font', fontList);
}

function setEvents() {
    $("#pillow-auto-model-text").keyup(function () {
        
        $('.front-model').text($(this).val());
        
        if($(this).val()!='') {
            
            $(".model-text-container")
                .children('.dependent')
                .removeClass('dependent')
                .addClass('dependent-shown')
                .show();

        } else {

            $(".model-text-container")
                .children('.dependent-shown')
                .removeClass('dependent-shown')
                .addClass('dependent')
                .hide();
        }

        calcPrice();
    });

    $("#pillow-advanced-front-text").keyup(function () {
        
        $('.front-text').html($(this).val().replace(/\r?\n/g,'<br/>'));
        if($(this).val()!='')
        {
            $(".advanced-text-container-front").children('.dependent').removeClass('dependent').addClass('dependent-shown').show();
        }
        else
        {
            $(".advanced-text-container-front").children('.dependent-shown').removeClass('dependent-shown').addClass('dependent').hide();
        }
        calcPrice();
    });

    $("#pillow-advanced-back-text").keyup(function () {
        $('.back-text').html($(this).val().replace(/\r?\n/g,'<br/>'));
        if($(this).val()!='')
        {
            $(".advanced-text-container-back").children('.dependent').removeClass('dependent').addClass('dependent-shown').show();
        }
        else
        {
            $(".advanced-text-container-back").children('.dependent-shown').removeClass('dependent-shown').addClass('dependent').hide();
        }
        calcPrice();
    });

    $('select#pillow-model-font').change(function () {
        font_changer('#pillow-model-font','.front-model');
    });
    
    $('select#pillow-advanced-front-font').change(function () {
        font_changer('#pillow-advanced-front-font','.front-text');
    });

    $('select#pillow-advanced-back-font').change(function () {
        font_changer('#pillow-advanced-back-font','.back-text');
    });

    //Заполнение Автомобильного номера
    $("#pillow-auto-num").keyup(function () {
        var current_input = $(this);
        
        var regexp_first_letter = /^[^A-Za-zА-Яа-я]{1}/i;
        var regexp_digits = /\D+/i;
        var regexp_last_letters = /[^A-Za-zА-Яа-я]{1,2}$/i; 
        
        var first_letter = $(this).val().substring(0,1);
        var digits = $(this).val().substring(1,4);
        var last_letters = $(this).val().substring(4);

        if(regexp_first_letter.test(first_letter)){
            first_letter=first_letter.slice(0,-1);
            $("#front-number-text-letter").text("");
            current_input.val(current_input.val().slice(0,-1));
        } else {
            $("#front-number-text-letter").text(first_letter);
        }

        if(regexp_digits.test(digits)){
            if(current_input.val().length > 1) {
                digits = digits.slice(0,-1);
                $("#front-number-text-digits").text(digits);
                current_input.val(current_input.val().slice(0,-1));
            }
        } else {
            $("#front-number-text-digits").text(digits);
        }

        if(regexp_last_letters.test(last_letters)){
            if(current_input.val().length >= 5) {
                last_letters = last_letters.slice(0,-1);
                $("#front-number-text-letters").text(last_letters);
                current_input.val(current_input.val().slice(0,-1));
            }
        } else {
            $("#front-number-text-letters").text(last_letters);
        }
    });

    //Заполнение региона
    $("#pillow-auto-num-region").keyup(function () {
        $(this).val($(this).val().replace(/[\D\s\._\-]+/g, ""));
        $(".front-number-region").text($(this).val());
    });

    $('.front-model, .front-text, .front-number, .back-text').draggable({
        containment: "parent",
        stop: function(event, ui) {
            $( event.originalEvent.target ).one('click', function(e){ e.stopImmediatePropagation(); } );
        }
    });
};

function font_changer(selectID,targetClass) {
    var choice = $(selectID+" option:selected");
    
    $(targetClass).css('font-style','normal'); //сбрасываем до начальных 
    $(targetClass).css('font-weight','normal');//значений 

    $(targetClass).css(choice.data('option'),choice.val());
}

module.exports = initTextComponent;