/*
    Автор конструктора: https://vk.com/lefftolstoi
*/
var $ = require('jquery');
        require('jquery-ui-browserify');
        
var inputMask = require('inputmask');
var Email = require('./libs/smtp');
var html2canvas = require('html2canvas');

require('isomorphic-fetch'); 
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'lkJGAKBZlJAAAAAAAAAABokbmFfinQvUIrKuOm3SBMok5iUHXhyIKhUNTK0CtJQd' });
var colorList = require('./datalists/colorList');
var logoList = require('./datalists/logoList');
var fontList = require('./datalists/fontList');
var i18n = require('./datalists/i18n');
var uuid = require('uuid/v4');

$(document).ready(function () {
    
    
    selectFontFiller('#pillow-model-font');
    selectFontFiller('#pillow-advanced-front-font');
    selectFontFiller('#pillow-advanced-back-font');

    selectLogoFiller('#pillow-mark-front');
    selectLogoFiller('#pillow-mark-back');
    
    radioColorFiller('.main-color', 'main', colorList.main);
    radioColorFiller('.model-color', 'model', colorList.thread);
    radioColorFiller('.advanced-front-color', 'advanced-front', colorList.thread);
    radioColorFiller('.advanced-back-color', 'advanced-back', colorList.thread);
    radioColorFiller('.edging-color', 'edging', colorList.edging);
    

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
    $("input[name=pillow-main-color]").change(function () {
        var pillowPathRegExp = /([A-Za-z_-]+)(\.[A-Za-z]+)/ig; // $1 - (name(color)) $2 - extension of file
        var headrestPathRegExp = /color-[A-Za-z_-]*/; // headrest picture name format - color-{color name}1outline-{colorname} 
                                                        // this regexp looks for color-{color name} part 
        var newPathPillow = $('#pillow-front-image, #pillow-back-image')
                                    .attr('src')
                                    .replace( pillowPathRegExp, $(this).val() + '$2');

        var newPathHeadrest=$('#headrest-image')
                                    .attr('src')
                                    .replace(headrestPathRegExp, 'color-' + $(this).val() );
        
        $('#pillow-front-image, #pillow-back-image').attr('src', newPathPillow);
        $('#headrest-image').attr('src', newPathHeadrest);
        
        calculate_price();
    });

    $("input[name=pillow-edging-color]").change(function () {
        var headrestOutlinePathRegExp = /outline-[A-Za-z_-]*/;

        var newPathHeadrest = $('#headrest-image')
                                    .attr('src')
                                    .replace( headrestOutlinePathRegExp, 'outline-' + $(this).val() );
        
        $('#headrest-image').attr('src',newPathHeadrest);
        
        calculate_price();
    });


    //Меняем цвет надписи модели
    $("input[name=pillow-model-color]").change(function () {
        var currentColor = colorList.thread[ $(this).val() ];
        
        $('.front-model').css('color', currentColor);

        calculate_price();
    });

    //Меняем цвет дополнительной фронтальной надписи
    $('input[name=pillow-advanced-front-color]').change(function () {
        var currentColor = colorList.thread[ $(this).val() ];
        $('.front-text').css('color', currentColor);
        calculate_price();
    });

    //Меняем цвет дополнительной задней надписи
    $('input[name=pillow-advanced-back-color]').change(function () {
        var currentColor = colorList.thread[ $(this).val() ];
        
        $('.back-text').css('color', currentColor);
        
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
        
        $('.front-text').html($(this).val().replace(/\r?\n/g,'<br/>'));
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
        calculate_price();
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
    
    //Выбор логотипа спереди
    $('select#pillow-mark-front').change(function () {
        var new_logo_path = $('#front-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-front option:selected').val().replace(/\s+/g,'')+'.png');
        $('#front-logo-img').attr('src',new_logo_path);
        $('#headrest-logo-img').attr('src',new_logo_path);
        calculate_price();
    });

    //Выбор логотипа сзади
    $('select#pillow-mark-back').change(function () {
        var new_logo_path = $('#back-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-back option:selected').val().replace(/\s+/g,'')+'.png');
        $('#back-logo-img').attr('src',new_logo_path);
        calculate_price();
    });
    
    //При изменении количества - пересчитываем цену
    $('#pillow-quantity').change(function () {
        calculate_price();
    });

    //Изменение шрифта
    $('select#pillow-model-font').change(function () {
        font_changer('#pillow-model-font','.front-model');
    });
    
    $('select#pillow-advanced-front-font').change(function () {
        font_changer('#pillow-advanced-front-font','.front-text');
    });

    $('select#pillow-advanced-back-font').change(function () {
        font_changer('#pillow-advanced-back-font','.back-text');
    });
    

    //Modal 
    $('#order_button').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		    function() {
				$('#modal') 
					.css('display', 'flex')
					.animate({opacity: 1, top: '30%'}, 200); 
		});
	});

	$('#modal_close, #overlay').click( function(){ 
		$('#modal')
			.animate({opacity: 0, top: '-30%'}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
    var im = new inputMask('+7-999-999-99-99');
    im.mask($('#telephone'));

    //Form submit
    $('#pillow-form').submit(function (e) {
        e.preventDefault();
        var body = form_prepost();
        var emailObj = {
            sender : "zzigsun@gmail.com",
            recipient : "vladlisitsinfl@gmail.com",
            theme : "Новый заказ",
            text : `${body} <br/>`,
            token : {token : 'b60f57c1-122a-436d-98c8-6491c59b32bc'}
        }
        //'b54fb7eb-e5f3-43ab-88b6-0b9e154a5640'
        switch ($("select#pillow-type").val()) {
            case 'gosnum':
            case 'nogosnum':
                sendEmailWithPicture('.pillow-preview', emailObj);
                break;
            case 'headrest':
                sendEmailWithPicture(".headrest-preview", emailObj);
                break;
            default:
                break;
        }
        $('.customer-info').hide();
        $('.congratutlations').show();
    });
    
    $('.save_pic').click(function () {
        switch ($("select#pillow-type").val()) {
            case 'gosnum':
            case 'nogosnum':
                save_screenshot(".pillow-preview");
                break;
            case 'headrest':
                save_screenshot(".headrest-preview")
                break;
            default :
                break;
        };
    });

    //Размеры лого
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

    //сделать элементы на подушке передвигаемыми
    $('.front-logo, .front-model, .front-text, .front-number, .back-logo, .back-text, .headrest-logo').draggable({
        containment: "parent",
        stop: function(event, ui) {
            $( event.originalEvent.target ).one('click', function(e){ e.stopImmediatePropagation(); } );
        }
    });

    init();
});


function init() {
    
    $("select#pillow-type [value='gosnum']").attr("selected", "selected").trigger('change');
    
    $("input[name='pillow-main-color']#black-main").prop('checked',true).trigger('change');    

    $("input[name='pillow-model-color']#red-model").prop('checked',true).trigger('change');
    $("select#pillow-model-font [value='bold']").attr("selected", "selected").trigger('change');

    $("input[name='pillow-advanced-front-color']#red-advanced-front").prop('checked',true).trigger('change');
    $("select#pillow-advanced-front-font [value='bold']").attr("selected", "selected").trigger('change');

    $("input[name='pillow-advanced-back-color']#red-advanced-back").prop('checked',true).trigger('change');
    
    $("input[name='pillow-edging-color']#gold-edging").prop('checked',true).trigger('change');
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
    var pillow_auto_mark_front_cat = $('select#pillow-mark-front option:selected').data('category');
    var pillow_auto_mark_reverse_cat = $('select#pillow-mark-back option:selected').data('category');
    var pillow_auto_model=$('#pillow-auto-model').val();
    var pillow_model_color=$('input[name=pillow-model-color]:checked').val();
    
    var pillow_advanced_front_text=$('#pillow-advanced-front-text').val();
    var pillow_advanced_front_color=$('input[name=pillow-advanced-front-color]:checked').val();
    var pillow_advanced_reverse_text=$('#pillow-advanced-back-text').val();
    var pillow_advanced_reverse_color=$('input[name=pillow-advanced-back-color]:checked').val();

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
                if(pillow_model_color == 'silver' || pillow_model_color == 'gold') 
                    finish_price+=50;
            }
            if(pillow_advanced_front_text != '') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver' || pillow_advanced_front_color == 'gold')
                    finish_price+=50;
            }
            
            if(pillow_advanced_reverse_text != '') {
                finish_price+=100;
                if(pillow_advanced_reverse_color == 'silver' || pillow_advanced_front_color == 'gold')
                    finish_price+=50;
            }
            finish_price*=quantity;
            break;
        case 'headrest':
            finish_price+=450;
            finish_price+=pillow_auto_mark_front_cat*100;
            if(pillow_advanced_front_text != '') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver' || pillow_advanced_front_color == 'gold')
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
}

function selectLogoFiller(selectID) {
    logoList.sort(function(logoNameA, logoNameB) {
        var compA = logoNameA.value.toUpperCase();
        var compB = logoNameB.value.toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    logoList.map(function (mark) {
        $(selectID).append(`<option value=${mark.value} data-category=${mark.category}>${mark.text}</option>`);
    });
}

function radioColorFiller(classID, suffix, colorList) {
    Object.keys(colorList).map(function (colorName) {
        $(`${classID}`).append(
            `<label for='${colorName}-${suffix}'>
                <input type='radio' name='pillow-${suffix}-color' id='${colorName}-${suffix}' value='${colorName}'>
                <div class='color-button'>
                    <div class='tooltip'>${i18n[colorName]}</div>
                    <span class='${colorName}'></span>
                </div>
            </label>`);
    });
}

function font_changer(selectID,targetClass) {
    var choice = $(selectID+" option:selected");
    
    $(targetClass).css('font-style','normal'); //сбрасываем до начальных 
    $(targetClass).css('font-weight','normal');//значений 

    $(targetClass).css(choice.data('option'),choice.val());
}

function form_prepost() {
    
    var fields = {
        gosnum : ['pillow-type','pillow-main-color','pillow-mark-front','pillow-mark-back','pillow-auto-model',
                        'pillow-model-color','pillow-model-font','pillow-advanced-front-text','pillow-advanced-front-color',
                        'pillow-advanced-front-font','pillow-auto-num','pillow-auto-num-region','pillow-advanced-back-text',
                        'pillow-advanced-back-color', 'pillow-advanced-back-font','pillow-quantity','pillow-order-comment',
                        'customer_name', 'customer_phone','customer_email'],
        nogosnum : ['pillow-type','pillow-main-color','pillow-mark-front','pillow-mark-back','pillow-auto-model',
                            'pillow-model-color','pillow-model-font','pillow-advanced-front-text','pillow-advanced-front-color',
                            'pillow-advanced-front-font','pillow-advanced-back-text', 'pillow-advanced-back-color', 
                            'pillow-advanced-back-font','pillow-quantity','pillow-order-comment', 'customer_name', 'customer_phone','customer_email'],
        headrest : ['pillow-type','pillow-main-color', 'pillow-mark-front','pillow-advanced-front-text','pillow-advanced-front-color',
                            'pillow-advanced-front-font', 'pillow-edging-color', 'pillow-quantity', 'pillow-order-comment', 'customer_name', 
                            'customer_phone','customer_email']
    };

    var form_data = $('#pillow-form').serializeArray();
    var pillow_type = form_data[0].value;
    
    var filtered_fields = form_data.filter(function(field) {
        if(fields[pillow_type].includes(field.name) && field.value != "" && field.value != "none") {
            if((field.name == 'pillow-model-color' || field.name == 'pillow-model-font') && $('#pillow-auto-model').val() == '') 
                return false;
            if((field.name == 'pillow-advanced-front-color' || field.name == 'pillow-advanced-front-font') && $('#pillow-advanced-front-text').val() == '') 
                return false;
            if((field.name == 'pillow-advanced-back-color' || field.name == 'pillow-advanced-back-font') && $('#pillow-advanced-back-text').val() == '') 
                return false;
            return true;
        }
    });

    var result_msg="";
    
    filtered_fields.map(function(item){
        var translateName = i18n.hasOwnProperty(item.name) ? i18n[item.name] : item.name;
        var translateVal = i18n.hasOwnProperty(item.value) ? i18n[item.value] : item.value;
        result_msg+=`<b>${translateName}</b> : ${translateVal} <br/>`;
    });
    result_msg+=`<b> Цена </b> : ${$('#pillow-current-price-num').text()} <br/>`
    return result_msg;
}

function save_screenshot(className) {
    html2canvas(document.querySelector(className))
        .then(function(canvas) {
                var a = document.createElement('a');
                canvas.crossOrigin="anonymous";
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = 'pillow_screenshot.jpg';
                a.click();
            }   
        );
};

function sendEmailWithPicture(className,emailObj) {
    html2canvas(document.querySelector(className))
        .then(function(canvas) {
            var attachment = canvas.toDataURL();
            var uniqueID = uuid();
            Email.send(
                emailObj.sender,
                emailObj.recipient,
                emailObj.theme,
                emailObj.text + `<b>Имя картинки </b>: ${uniqueID}.png <br/> 
                                <img src=${attachment}/>`,
                emailObj.token);  
            var file = dataURItoBlob(attachment);
            dbx.filesUpload({path: '/'+`${uniqueID}.png`, contents: file})
                .then(function(response) {
                    console.log('success');
                })
                .catch(function(error) {
                    console.log('error');
                });
            
            }
        );
}

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    
    return new Blob([ia], {type:mimeString});
}