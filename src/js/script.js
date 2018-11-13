/*
    Автор конструктора: https://vk.com/lefftolstoi
*/
var $ = require('jquery');
        require('jquery-ui-browserify');
        
var textComponent = require('./components/textComponent');
var colorComponent = require('./components/colorComponent');
var logoComponent = require('./components/logoComponent');
var modalFormComponent = require('./components/modalFormComponent');

var calcPrice = require('./utils/calcPrice');

$(document).ready(function () {

    textComponent();
    colorComponent();
    logoComponent();
    modalFormComponent();

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
        calcPrice();
    });
    
    //При изменении количества - пересчитываем цену
    $('#pillow-quantity').change(function () {
        calcPrice();
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
    calcPrice();
};

function show_front_form(isGosNum) {
    $('.pillow-form-item').hide();
    if(isGosNum) { 
        $('.pillow-form-item.front-form').not('.dependent').show();
        $('.front-number').show();
    }else {
        $('.pillow-form-item.front-form').not('.item-gosnum').not('.dependent').show();
        $('.front-number').hide();
    }
};

function show_back_form() {
    $('.pillow-form-item').hide();
    $('.pillow-form-item.back-form').not('.dependent').show();
};

function show_headrest_form() {
    $('.pillow-form-item').hide();
    $('.pillow-form-item.headrest-form').not('.dependent').show();
};

function show_pillow_preview() {
    $('.pillow-preview').show();
    $('.headrest-preview').hide();
};

function show_headrest_preview() {
    $('.headrest-preview').show();
    $('.pillow-preview').hide();
};