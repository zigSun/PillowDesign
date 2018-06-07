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
            "value": "Exo20",
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
        { 'value' : 'Buick', 'category' : '1', 'text' : 'Buick' },
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

var translateObj = {
    'pillow-type' : 'Тип изделия',
    'pillow-color' : 'Цвет изделия',
    'pillow-mark-front' : 'Логотип(лицевая сторона)',
    'pillow-mark-back' : 'Логотип(задняя сторона)',
    'pillow-auto-model' : 'Модель автомобиля',
    'pillow-model-color' : 'Цвет ниток модели',
    'pillow-model-font' : 'Шрифт модели',
    'pillow-advanced-front-text' : 'Дополнительный текст(лицевая сторона)',
    'pillow-advanced-front-color' : 'Цвет ниток доп.текста(лицевая сторона)',
    'pillow-advanced-front-font' : 'Шрифт доп.текста(лицевая сторона)',
    'pillow-auto-num' : 'Автомобильный номер',
    'pillow-auto-num-region' : 'Автомобильный номер - регион',
    'pillow-advanced-back-text' : 'Дополнительный текст(задняя сторона)',
    'pillow-advanced-back-color' : 'Цвет ниток доп.текста(задняя сторона)',
    'pillow-advanced-back-font' : 'Шрифт доп.текста(задняя сторона)',
    'pillow-color-edging' : 'Цвет окантовки автоподголовника',
    'pillow-quantity' : 'Количество изделий',
    'customer_name' : 'Имя покупателя',
    'customer_phone' : 'Телефон покупателя',

    'gosnum' : 'Автоподушка с гос.номером',
    'nogosnum' : 'Автоподушка без гос.номера',
    'headrest' : 'Автоподголовник',
    'normal' : 'Простой',
    'italic' : 'Курсив',
    'bold' : 'Жирный'
}

$(document).ready(function () {
    
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
        var current_color = colorScheme[$(this).val()];
        $('.front-model').css('color', current_color);
        calculate_price();
    });

    $('input[name=pillow-advanced-front-color]').change(function () {
        var current_color = colorScheme[$(this).val()];
        $('.front-text').css('color', current_color);
        calculate_price();
    });

    $('input[name=pillow-advanced-back-color]').change(function () {
        var current_color = colorScheme[$(this).val()];
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

    $("#pillow-auto-num-region").keyup(function () {
        $(this).val($(this).val().replace(/[\D\s\._\-]+/g, ""));
        $(".front-number-region").text($(this).val());
    });
    
    $('select#pillow-mark-front').change(function () {
        var new_logo_path = $('#front-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-front option:selected').val().replace(/\s+/g,'')+'.png');
        $('#front-logo-img').attr('src',new_logo_path);
        $('#headrest-logo-img').attr('src',new_logo_path);
        calculate_price();
    });

    $('select#pillow-mark-back').change(function () {
        var new_logo_path = $('#back-logo-img').attr('src').replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-back option:selected').val().replace(/\s+/g,'')+'.png');
        $('#back-logo-img').attr('src',new_logo_path);
        calculate_price();
    });
    
    $('#pillow-quantity').change(function () {
        calculate_price();
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
    
    $('#order_button').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		    function() {
				$('#modal') 
					.css('display', 'flex')
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});

	$('#modal_close, #overlay').click( function(){ 
		$('#modal')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});

    $('#pillow-form').submit(function (e) {
        e.preventDefault();
        var body = form_prepost();
        var attachment;
        switch ($("select#pillow-type").val()) {
            case 'gosnum':
            case 'nogosnum':
                html2canvas(document.querySelector(".pillow-preview"),{useCORS:true}).then(canvas => {
                    attachment = canvas.toDataURL();
                    Email.send(
                        "zzigsun@gmail.com",
                        "vladlisitsin1414@mail.ru",
                        "Новый заказ",
                        `${body} <br/> <img src=${attachment} />`,
                        {token : 'b54fb7eb-e5f3-43ab-88b6-0b9e154a5640'});  
                });
                $('.customer-info').hide();
                $('.congrats').show();
                break;
            case 'headrest':
                html2canvas(document.querySelector(".headrest-preview")).then(canvas => {
                    attachment = canvas.toDataURL();
                    Email.send(
                        "zzigsun@gmail.com",
                        "vladlisitsinfl@gmail.com",
                        "Новый заказ",
                        `${body} <br/> <img src=${attachment} />`,
                        {token : 'b54fb7eb-e5f3-43ab-88b6-0b9e154a5640'});
                });
                $('.customer-info').hide();
                $('.congrats').show();
                break;
            default:
                break;
        }
    });
    
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

    
});


function init() {

    selectFontFiller('#pillow-model-font');
    selectFontFiller('#pillow-advanced-front-font');
    selectFontFiller('#pillow-advanced-back-font');

    selectLogoFiller('#pillow-mark-front');
    selectLogoFiller('#pillow-mark-back');
    

    $("select#pillow-type [value='gosnum']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-color']#black").prop('checked',true).trigger('change');    
    $("input[name='pillow-model-color']#red-model").prop('checked',true).trigger('change');
    $("select#pillow-model-font [value='bold']").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-front-color']#red-advanced-front").prop('checked',true).trigger('change');
    $("select#pillow-advanced-front-font [value='bold'").attr("selected", "selected").trigger('change');
    $("input[name='pillow-advanced-back-color']#red-advanced-back").prop('checked',true).trigger('change');
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

function font_changer(selectID,targetClass) {
    var choice = $(selectID+" option:selected");
    $(targetClass).css('font-style','normal');
    $(targetClass).css('font-weight','normal');
    $(targetClass).css(choice.data('option'),choice.val());
}

function form_prepost() {
    
    var fields = {
        gosnum : ['pillow-type','pillow-color','pillow-mark-front','pillow-mark-back','pillow-auto-model',
                        'pillow-model-color','pillow-model-font','pillow-advanced-front-text','pillow-advanced-front-color',
                        'pillow-advanced-front-font','pillow-auto-num','pillow-auto-num-region','pillow-advanced-back-text',
                        'pillow-advanced-back-color', 'pillow-advanced-back-font','pillow-quantity','pillow-order-comment',
                        'customer_name', 'customer_phone'],
        nogosnum : ['pillow-type','pillow-color','pillow-mark-front','pillow-mark-back','pillow-auto-model',
                            'pillow-model-color','pillow-model-font','pillow-advanced-front-text','pillow-advanced-front-color',
                            'pillow-advanced-front-font','pillow-advanced-back-text', 'pillow-advanced-back-color', 
                            'pillow-advanced-back-font','pillow-quantity','pillow-order-comment', 'customer_name', 'customer_phone'],
        headrest : ['pillow-type','pillow-color', 'pillow-mark-front','pillow-advanced-front-text','pillow-advanced-front-color',
                            'pillow-advanced-front-font', 'pillow-color-edging', 'pillow-quantity', 'pillow-order-comment', 'customer_name', 
                            'customer_phone']
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
        var translateName = translateObj.hasOwnProperty(item.name) ? translateObj[item.name] : item.name;
        var translateVal = translateObj.hasOwnProperty(item.value) ? translateObj[item.value] : item.value;
        result_msg+=`<b>${translateName}</b> : ${translateVal} <br/>`;
    });

    return result_msg;
}

