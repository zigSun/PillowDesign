/*
    Автор конструктора: https://vk.com/lefftolstoi
*/
var fontList = [
        {
            "value": "normal",
            "text" : 'Простой',
            "option" : 'font-style'
        },
        {
            "value": "italic",
            "text" : 'Курсив',
            "option" : 'font-style'
        },
        {
            "value": "bold",
            "text" : 'Жирный',
            "option" : 'font-weight'
        },
        {
            "value": 'GothamPro',
            "text" : 'Gotham Pro',
            "option" : 'font-family'
        },
        {
            "value": "GothamProItalic",
            "text" : 'Gotham Pro курсив',
            "option" : 'font-family'
        },
        {
            "value": "GothamProBoldItalic",
            "text" : 'Gotham Pro жирный курсив',
            "option" : 'font-family'
        },
        {
            "value": "GothamProBold",
            "text" : 'Gotham Pro жирный',
            "option" : 'font-family'
        },
        {
            "value": "SupermolotLight",
            "text" : "Supermolot Light",
            "option" : 'font-family'
        },
        {
            "value": "SupermolotLightItalic",
            "text" : "Supermolot Light курсив",
            "option" : 'font-family'
        },
        {
            "value": "SupermolotBold",
            "text" : "Supermolot жирный",
            "option" : 'font-family'
        },
        {
            "value": "SupermolotBoldItalic",
            "text" : "Supermolot жирный курсив",
            "option" : 'font-family'
        },
        {
            "value": "DKKnucklebones",
            "text" : "DK Knucklebones",
            "option" : 'font-family'
        },
        {
            "value": "VoxRegular15",
            "text" : "Vox",
            "option" : 'font-family'
        },
        {
            "value": "BigNoodleTooOblique",
            "text" : "Big Noodle",
            "option" : 'font-family'
        },
        {
            "value": "Plainot",
            "text" : "Plainot",
            "option" : 'font-family'
        },
        {
            "value": "Exo2.0",
            "text" : "Exo 2.0",
            "option" : 'font-family'
        },
        {
            "value": 'BehrensModern',
            "text" : 'Behrens Modern',
            "option" : 'font-family'
        },
        {
            "value": 'BehrensAntiqua',
            "text" : 'Behrens  Antiqua',
            "option" : 'font-family'
        },
        {
            "value": 'CityFlowers',
            "text" : 'City Flowers',
            "option" : 'font-family'
        },
        {
            "value": 'Raleway',
            "text" : 'Raleway',
            "option" : 'font-family'
        },
    ];

var logoList = [
        { 'value' : 'Audi', 'category' : '1', 'text' : 'Audi' },
        { 'value' : 'AudiAUDI', 'category' : '1', 'text' : 'Audi AUDI' },
        { 'value' : 'Buick', 'category' : '1', 'text' : 'Audi' },
        { 'value' : 'Isuzu', 'category' : '1', 'text' : 'Isuzu' },
        { 'value' : 'KIA2', 'category' : '1', 'text' : 'KIA 2' },
        { 'value' : 'KIA3', 'category' : '1', 'text' : 'KIA 3' },
        { 'value' : 'Chrysler', 'category' : '1', 'text' : 'Chrysler Pacifica' },
        { 'value' : 'Lincoln', 'category' : '1', 'text' : 'Lincoln' },
        { 'value' : 'Mazda', 'category' : '1', 'text' : 'Mazda' },
        { 'value' : 'MAN', 'category' : '1', 'text' : 'MAN' },
        { 'value' : 'Mercedes', 'category' : '1', 'text' : 'Mercedes' },
        { 'value' : 'Opel', 'category' : '1', 'text' : 'Opel' },
        { 'value' : 'Pontiac', 'category' : '1', 'text' : 'Pontiac' },
        { 'value' : 'Citroen2', 'category' : '1', 'text' : 'Citroen 2' },
        { 'value' : 'Toyota', 'category' : '1', 'text' : 'Toyota' },
        { 'value' : 'UAZ', 'category' : '1', 'text' : 'UAZ' },
        { 'value' : 'Haima', 'category' : '1', 'text' : 'Haima' },
        { 'value' : 'Chery', 'category' : '1', 'text' : 'Chery' },
        { 'value' : 'CheryCHERY', 'category' : '1', 'text' : 'Chery CHERY' },
        { 'value' : 'Jaguar', 'category' : '1', 'text' : 'Jaguar' },
        { 'value' : 'Bogdan', 'category' : '2', 'text' : 'Bogdan' },
        { 'value' : 'Hover', 'category' : '2', 'text' : 'Hover' },
        { 'value' : 'Jeep', 'category' : '2', 'text' : 'Jeep' },
        { 'value' : 'Daewoo', 'category' : '2', 'text' : 'Daewoo' },
        { 'value' : 'Infiniti', 'category' : '2', 'text' : 'Infiniti' },
        { 'value' : 'KamazKAMAZ', 'category' : '2', 'text' : 'Kamaz KAMAZ' },
        { 'value' : 'LADA', 'category' : '2', 'text' : 'LADA' },
        { 'value' : 'Lexus', 'category' : '2', 'text' : 'Lexus' },
        { 'value' : 'LexusLEXUS', 'category' : '2', 'text' : 'Lexus LEXUS' },
        { 'value' : 'Lifan', 'category' : '2', 'text' : 'Lifan' },
        { 'value' : 'Mini', 'category' : '2', 'text' : 'Mini' },
        { 'value' : 'Mitsubishi', 'category' : '2', 'text' : 'Mitsubishi' },
        { 'value' : 'Mitsubishi2', 'category' : '2', 'text' : 'Mitsubishi 2' },
        { 'value' : 'Renault', 'category' : '2', 'text' : 'Renault' },
        { 'value' : 'SsangYong', 'category' : '2', 'text' : 'SsangYong' },
        { 'value' : 'Suzuki', 'category' : '2', 'text' : 'Suzuki' },
        { 'value' : 'Fiat', 'category' : '2', 'text' : 'Fiat' },
        { 'value' : 'Freightliner', 'category' : '2', 'text' : 'Freightliner' },
        { 'value' : 'Volkswagen', 'category' : '2', 'text' : 'Volkswagen' },
        { 'value' : 'Ford', 'category' : '2', 'text' : 'Ford' },
        { 'value' : 'Hyundai', 'category' : '2', 'text' : 'Hyundai' },
        { 'value' : 'Chery2', 'category' : '2', 'text' : 'Chery2' },
        { 'value' : 'Chevrolet', 'category' : '2', 'text' : 'Chevrolet' },
        { 'value' : 'ChevroletCHEVROLET', 'category' : '2', 'text' : 'Chevrolet CHEVROLET' },
        { 'value' : 'BMW', 'category' : '3', 'text' : 'BMW' },
        { 'value' : 'Volvo', 'category' : '3', 'text' : 'Volvo' },
        { 'value' : 'GAZ', 'category' : '3', 'text' : 'GAZ' },
        { 'value' : 'Geely', 'category' : '3', 'text' : 'Geely' },
        { 'value' : 'Geely2', 'category' : '3', 'text' : 'Geely 2' },
        { 'value' : 'Dodge', 'category' : '3', 'text' : 'Dodge' },
        { 'value' : 'CadillacCADILLAC', 'category' : '3', 'text' : 'Cadillac CADILLAC' },
        { 'value' : 'Daewoo2', 'category' : '3', 'text' : 'Daewoo 2' },
        { 'value' : 'KIA1', 'category' : '3', 'text' : 'KIA 1' },
        { 'value' : 'LandRover', 'category' : '3', 'text' : 'Land Rover' },
        { 'value' : 'Nissan', 'category' : '3', 'text' : 'Peugeot' },
        { 'value' : 'Rolls-Royce', 'category' : '3', 'text' : 'Rolls-Royce' },
        { 'value' : 'Seat', 'category' : '3', 'text' : 'Seat' },
        { 'value' : 'CitroenCITROEN', 'category' : '3', 'text' : 'Citroen CITROEN' },
        { 'value' : 'FordMustang', 'category' : '3', 'text' : 'Ford Mustang' },
        { 'value' : 'HummerH2', 'category' : '3', 'text' : 'Hummer H2' },
        { 'value' : 'HummerH3', 'category' : '3', 'text' : 'Hummer H3' },
        { 'value' : 'Skoda', 'category' : '3', 'text' : 'Skoda' },
        { 'value' : 'Skoda2', 'category' : '3', 'text' : 'Skoda 2' },
        { 'value' : 'AlfaRomeo', 'category' : '4', 'text' : 'Alfa Romeo' },
        { 'value' : 'AlfaRomeoALFAROMEO', 'category' : '4', 'text' : 'Alfa Romeo ALFA ROMEO' },
        { 'value' : 'Bugatti', 'category' : '4', 'text' : 'Bugatti' },
        { 'value' : 'Porsche', 'category' : '4', 'text' : 'Porsche' },
        { 'value' : 'Seat2', 'category' : '4', 'text' : 'Seat 2' },
        { 'value' : 'Faw', 'category' : '4', 'text' : 'Faw' },
        { 'value' : 'Ferrari', 'category' : '4', 'text' : 'Ferrari' },
        { 'value' : 'Honda2', 'category' : '4', 'text' : 'Honda 2' },
    ];



$(document).ready(function () {
    
    var colorScheme = {
        "milky" : "#e9e6e1",
        "black" : "#000000",
        "red"   : "#e82b00",
        "ruby"  : "#861f1c",
        "cyan"  : "#559ffd",
        "blue"  : "#141cfd",
        "light-gray" : "#dcdcdc",
        "dark-gray" : "#383a39",
        "light-beige" : "#e6dfca",
        "dark-beige" : "#9d7f5c",
        "silver" : "#c0c0c0",
        "gold" : "#ffd700",
        "white" : "#ffffff",
        "rose" : "#bc8f8f",
        "gray" : "#808080",
        "green" : "#008000"
    };
    
    
    //----PreviewSides Events
    $('.pillow-preview-frontside').click(function () {
        show_front_form($('select#pillow-type option:selected').val() === 'gosnum');
        $('.active-side').removeClass('active-side');
        $(this).addClass('active-side');
    });
    
    $('.pillow-preview-backside').click(function () {
        show_back_form();
        $('.active-side').removeClass('active-side');
        $(this).addClass('active-side');
    });
    
    
    //----FormChange Events 
    $('select#pillow-type').change(function () {
        switch ($('select#pillow-type option:selected').val()) {
            case 'gosnum':
                show_front_form(true); //true - show Gos Field
                show_pillow_preview();
                break;
            case 'nogosnum':
                show_front_form(false); //false - not to show Gos Field
                show_pillow_preview();
                break;
            case 'headrest':
                show_headrest_form();
                show_headrest_preview();
                break;
            default:
                break;
        }
        calculate_price();
    });
        //-----Color change events
    $("input[name=pillow-color]").change(function () {
        var new_path_pillow = $('#pillow-front-image, #pillow-back-image').attr('src').replace(/([A-Za-z_-]+)(\.[A-Za-z]+)/ig,$(this).val()+'$2');
        var new_path_headrest=$('#headrest-image').attr('src').replace(/color-[A-Za-z_-]*/,'color-'+$(this).val());
        $('#pillow-front-image, #pillow-back-image').attr('src',new_path_pillow);
        $('#headrest-image').attr('src',new_path_headrest);
        calculate_price();
    });
    $("input[name=pillow-color-edging]").change(function () {
        var new_path_headrest=$('#headrest-image').attr('src').replace(/outline-[A-Za-z_-]*/,'outline-'+$(this).val());
        $('#headrest-image').attr('src',new_path_headrest);
        calculate_price();
    });



    $("input[name=pillow-model-color]").change(function () {
        var current_color = colorScheme[$(this).val().replace('-model','')];
        $('.front-model').css('color', current_color);
        calculate_price();
    });

    $('input[name=pillow-advanced-front-color]').change(function () {
        var current_color = colorScheme[$(this).val().replace('-advanced-front','')];
        $('.front-text').css('color', current_color);
        calculate_price();
    });

    $('input[name=pillow-advanced-reverse-color]').change(function () {
        var current_color = colorScheme[$(this).val().replace('-advanced-reverse','')];
        $('.back-text').css('color', current_color);
        calculate_price();
    });


        //------Text change events
    $("#pillow-auto-model").keyup(function () {
        $('.front-model').text($(this).val());
        if($(this).val()!='')
        {
            $(".model-text-container").children('.dependent').removeClass('dependent').addClass('dependent-shown').show();
        }
        else
        {
            $(".model-text-container").children('.dependent-shown').removeClass('dependent-shown').addClass('dependent').hide();
        }
        calculate_price();
    });

    $("#pillow-advanced-front-text").keyup(function () {
        $('.front-text').text($(this).val());
        if($(this).val()!='')
        {
            $(".advanced-text-container-front").children('.dependent').removeClass('dependent').addClass('dependent-shown').show();
        }
        else
        {
            $(".advanced-text-container-front").children('.dependent-shown').removeClass('dependent-shown').addClass('dependent').hide();
        }
        calculate_price();
    });
    $("#pillow-advanced-reverse-text").keyup(function () {
        $('.back-text').text($(this).val());
        if($(this).val()!='')
        {
            $(".advanced-text-container-back").children('.dependent').removeClass('dependent').addClass('dependent-shown').show();
        }
        else
        {
            $(".advanced-text-container-back").children('.dependent-shown').removeClass('dependent-shown').addClass('dependent').hide();
        }
        calculate_price();
    });

    $("#pillow-auto-num").keyup(function () {
        $(this).val().length>=1 ? $("#front-number-text-letter").text($(this).val()[0]):$("#front-number-text-letter").text("");
        $(this).val().length>=4 ? $("#front-number-text-digits").text($(this).val()[1]+$(this).val()[2]+$(this).val()[3]):$("#front-number-text-digits").text(""); 
        $(this).val().length>=6 ? $("#front-number-text-letters").text($(this).val()[4]+$(this).val()[5]) : $("#front-number-text-letters").text("");    
    });

    $("#pillow-auto-num-region").keyup(function () {
        $(this).val($(this).val().replace(/[\D\s\._\-]+/g, ""));
        $(".front-number-region").text($(this).val());
    });
    
    $('select#pillow-auto-mark-front').change(function () {
        var new_logo_path = $('#front-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-auto-mark-front option:selected').val().replace(/\s+/g,'')+'.png');
        $('#front-logo-img').attr('src',new_logo_path);
        $('#headrest-logo-img').attr('src',new_logo_path);
        calculate_price();
    });
    $('select#pillow-auto-mark-reverse').change(function () {
        var new_logo_path = $('#back-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-auto-mark-reverse option:selected').val().replace(/\s+/g,'')+'.png');
        $('#back-logo-img').attr('src',new_logo_path);
        calculate_price();
    });
    
    $('#pillow-quantity').change(function () {
        calculate_price();
    });

    $('select#pillow-font-model').change(function () {
        font_changer('#pillow-font-model','.front-model');
    });
    
    $('select#pillow-font-advanced-front').change(function () {
        font_changer('#pillow-font-advanced-front','.front-text');
    });

    $('select#pillow-font-advanced-reverse').change(function () {
        font_changer('#pillow-font-advanced-reverse','.back-text');
    });
    
    // $('#pillow-form').submit(function (e) {
    //     e.preventDefault();
    //     switch ($("select#pillow-type").val()) {
    //         case 'gosnum':
    //         case 'nogosnum':
    //             html2canvas(document.querySelector(".pillow-preview")).then(canvas => {
    //                 document.body.appendChild(canvas)
    //             });
    //             break;
    //         case 'headrest':
    //             html2canvas(document.querySelector(".headrest-preview")).then(canvas => {
    //                 document.body.appendChild(canvas)
    //             });
    //         default:
    //             break;
    //     }
    // });
    // $("button[type='submit']").click( function (e) {
    //     e.preventDefault();
    //     console.log('prevented1');
    //     switch ($("select#pillow-type").val()) {
    //         case 'gosnum':
    //         case 'nogosnum':
    //             html2canvas(document.querySelector(".pillow-preview")).then(canvas => {
    //                 document.body.appendChild(canvas)
    //             });
    //             break;
    //         case 'headrest':
    //             html2canvas(document.querySelector(".headrest-preview")).then(canvas => {
    //                 document.body.appendChild(canvas)
    //             });
    //         default:
    //             break;
    //     }
    // });
    
    $('.front-logo, .back-logo, .headrest-logo').click(function (e) {   
        var item = $(this);
        if(item.hasClass('logo-state-1')) item.removeClass('logo-state-1').addClass('logo-state-2');
        else
        if(item.hasClass('logo-state-2')) item.removeClass('logo-state-2').addClass('logo-state-3');
        else
        if(item.hasClass('logo-state-3')) item.removeClass('logo-state-3').addClass('logo-state-4');
        else
        if(item.hasClass('logo-state-4')) item.removeClass('logo-state-4').addClass('logo-state-1'); 
    });


    $('.front-logo, .front-model, .front-text, .front-number, .back-logo, .back-text, .headrest-logo').draggable({
        containment: "parent",
        stop: function(event, ui) {
            $( event.originalEvent.target ).one('click', function(e){ e.stopImmediatePropagation(); } );
        }
    });

    


    init();
    //$('select').select2();
    
});

function init() {

    selectFontFiller('#pillow-font-model');
    selectFontFiller('#pillow-font-advanced-front');
    selectFontFiller('#pillow-font-advanced-reverse');

    selectLogoFiller('#pillow-auto-mark-front');
    selectLogoFiller('#pillow-auto-mark-reverse');
    

    $("select#pillow-type [value='gosnum']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-color']#black").prop('checked',true).trigger('change');    
    $("input[name='pillow-model-color']#red-model").prop('checked',true).trigger('change');
    $("select#pillow-font-model [value='bold']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-front-color']#red-advanced-front").prop('checked',true).trigger('change');
    $("select#pillow-font-advanced-front [value='bold'").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-reverse-color']#red-advanced-reverse").prop('checked',true).trigger('change');
}

function set_price(number) {
    $('#pillow-current-price-num').text(number);
}

function show_front_form(isGosNum) {
    $('.pillow-form-item').hide();
    if(isGosNum) { 
        $('.pillow-form-item.front-form').not('.dependent').show();
        $('.front-number').show();
    }else {
        $('.pillow-form-item.front-form').not('.item-gosnum').not('.dependent').show();
        $('.front-number').hide();
    }
}

function show_back_form() {
    $('.pillow-form-item').hide();
    $('.pillow-form-item.back-form').not('.dependent').show();
}

function show_headrest_form() {
    $('.pillow-form-item').hide();
    $('.pillow-form-item.headrest-form').not('.dependent').show();
}

function show_pillow_preview() {
    $('.pillow-preview').show();
    $('.headrest-preview').hide();
}
function show_headrest_preview() {
    $('.headrest-preview').show();
    $('.pillow-preview').hide();
}


function calculate_price() {
    var pillow_type = $('select#pillow-type option:selected').val();
    var pillow_auto_mark_front_cat = $('select#pillow-auto-mark-front option:selected').data('category');
    var pillow_auto_mark_reverse_cat = $('select#pillow-auto-mark-reverse option:selected').data('category');
    var pillow_auto_model=$('#pillow-auto-model').val();
    var pillow_model_color=$('input[name=pillow-model-color]:checked').val();
    
    var pillow_advanced_front_text=$('#pillow-advanced-front-text').val();
    var pillow_advanced_front_color=$('input[name=pillow-advanced-front-color]:checked').val();
    var pillow_advanced_reverse_text=$('#pillow-advanced-reverse-text').val();
    var pillow_advanced_reverse_color=$('input[name=pillow-advanced-reverse-color]:checked').val();

    var quantity = $("#pillow-quantity").val();

    var finish_price=0;

    switch (pillow_type) {
        case 'gosnum':
            finish_price+=200;
        case 'nogosnum':
            finish_price+=500;
            finish_price+=pillow_auto_mark_front_cat*100 + pillow_auto_mark_reverse_cat*100;
            if (pillow_auto_model != '') {
                finish_price+=100;
                if(pillow_model_color == 'silver-model' || pillow_model_color == 'gold-model') 
                    finish_price+=50;
            }
            if(pillow_advanced_front_text != '') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver-advanced-front' || pillow_advanced_front_color == 'gold-advanced-front')
                    finish_price+=50;
            }
            
            if(pillow_advanced_reverse_text != '') {
                finish_price+=100;
                if(pillow_advanced_reverse_color == 'silver-advanced-reverse' || pillow_advanced_front_color == 'gold-advanced-reverse')
                    finish_price+=50;
            }
            finish_price*=quantity;
            break;
        case 'headrest':
            finish_price+=450;
            finish_price+=pillow_auto_mark_front_cat*100;
            if(pillow_advanced_front_text != '') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver-advanced-front' || pillow_advanced_front_color == 'gold-advanced-front')
                    finish_price+=50;
            }
            finish_price*=quantity;
            break;
    }
    set_price(finish_price);
}

function selectFontFiller(selectID) {
    fontList.map(function (font) {
        $(selectID).append(`<option value=${font.value} data-option=${font.option}>${font.text}</option>`);
    });
};

function selectLogoFiller(selectID) {
    logoList.sort(function(logoNameA, logoNameB) {
        var compA = logoNameA.value.toUpperCase();
        var compB = logoNameB.value.toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    logoList.map(function (mark) {
        $(selectID).append(`<option value=${mark.value} data-category=${mark.category}>${mark.text}</option>`);
    });
};

function font_changer(selectID,targetClass) {
    
    var choice = $(selectID+" option:selected");
    $(targetClass).css('font-style','normal');
    $(targetClass).css('font-weight','normal');
    $(targetClass).css(choice.data('option'),choice.val());

}