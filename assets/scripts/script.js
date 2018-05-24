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
    }
    
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
                show_pillow_preview()
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
        var new_path_pillow = $('#pillow-front-image, #pillow-back-image').attr('src').replace(/[A-Za-z_-]*.png/ig,$(this).val()+'.png');
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
    
    init();
    
});

function init() {
    $("select#pillow-type [value='gosnum']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-color']#black").prop('checked',true).trigger('change');    
    $("input[name='pillow-model-color']#red-model").prop('checked',true).trigger('change');
    $("select#pillow-font-model [value='bold']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-front-color']#red-advanced-front").prop('checked',true).trigger('change');
    $("select#pillow-font-advanced-front [value='bold'").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-reverse-color']#red-advanced-reverse").prop('checked',true).trigger('change');
}

function get_current_price() {
    return Number($('#pillow-current-price-num').text());
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
    var pillow_auto_mark_front_cat = $('select#pillow-auto-mark-front option:selected').parent().attr('label');
    var pillow_auto_mark_reverse_cat = $('select#pillow-auto-mark-reverse option:selected').parent().attr('label');
    
    var pillow_auto_model=$('#pillow-auto-model').val();
    var pillow_model_color=$('input[name=pillow-model-color]').val();
    
    var pillow_advanced_front_text=$('#pillow-advanced-front-text').val();
    var pillow_advanced_front_color=$('input[name=pillow-advanced-front-color]');
    var pillow_advanced_reverse_text=$('#pillow-advanced-reverse-text').val();
    var pillow_advanced_reverse_color=$('input[name=pillow-advanced-reverse-color]');

    var quantity = $("#pillow-quantity").val();

    var finish_price=0;

    switch (pillow_type) {
        case 'gosnum':
            finish_price+=200;
        case 'nogosnum':
            finish_price+=500;
            switch (pillow_auto_mark_front_cat) {
                case 'Категория 1':
                    finish_price+=100;
                    break;
                case 'Категория 2':
                    finish_price+=200;
                    break;
                case 'Категория 3':
                    finish_price+=300;
                    break;
                case 'Категория 4':
                    finish_price+=400;
                    break;            
                default:
                    break;
            }
            switch (pillow_auto_mark_reverse_cat) {
                case 'Категория 1':
                    finish_price+=100;
                    break;
                case 'Категория 2':
                    finish_price+=200;
                    break;
                case 'Категория 3':
                    finish_price+=300;
                    break;
                case 'Категория 4':
                    finish_price+=400;
                    break;            
                default:
                    break;
            }

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
            finish_price+=300;
            switch (pillow_auto_mark_front_cat) {
                case 'Категория 1':
                    finish_price+=100;
                    break;
                case 'Категория 2':
                    finish_price+=200;
                    break;
                case 'Категория 3':
                    finish_price+=300;
                    break;
                case 'Категория 4':
                    finish_price+=400;
                    break;            
                default:
                    break;
            }
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


function font_changer(selectID,targetClass) {
    
    $(targetClass).css('font-style','normal');
    $(targetClass).css('font-weight','normal');

    switch ($(selectID+" option:selected").text()) {
        case 'Простой':
            $(targetClass).css('font-style','normal');
            break;
        case 'Наклонный':
            $(targetClass).css('font-style','italic');
            break;
        case 'Жирный':
            $(targetClass).css('font-weight','bold');
            break;
        default:
            break;
        };
}