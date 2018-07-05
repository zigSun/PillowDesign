var $ = require('jquery');
        require('jquery-ui-browserify');

var colorList = require('../datalists/colorList');
var i18n = require('../datalists/i18n');
var calcPrice = require('../utils/calcPrice');

function initColorComponent() {
    setElementsToPage();
    setEvents();
}

function colorPickerComponent(classID, suffix, colorList) {
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

function setElementsToPage() {
    colorPickerComponent('.main-color', 'main', colorList.main);
    colorPickerComponent('.model-color', 'model', colorList.thread);
    colorPickerComponent('.advanced-front-color', 'advanced-front', colorList.thread);
    colorPickerComponent('.advanced-back-color', 'advanced-back', colorList.thread);
    colorPickerComponent('.edging-color', 'edging', colorList.edging);
}

function setEvents() {
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
        
        calcPrice();
    });

    $("input[name=pillow-edging-color]").change(function () {
        var headrestOutlinePathRegExp = /outline-[A-Za-z_-]*/;
        var newPathHeadrest = $('#headrest-image')
                                    .attr('src')
                                    .replace( headrestOutlinePathRegExp, 'outline-' + $(this).val() );
        
        $('#headrest-image').attr('src',newPathHeadrest);
        calcPrice();
    });
    
    $("input[name=pillow-model-color]").change(function () {
        var currentColor = colorList.thread[ $(this).val() ];   
        $('.front-model').css('color', currentColor);
        calcPrice();
    });
    
    $('input[name=pillow-advanced-front-color]').change(function () {
        var currentColor = colorList.thread[ $(this).val() ];
        $('.front-text').css('color', currentColor);
        calcPrice();
    });
    
    $('input[name=pillow-advanced-back-color]').change(function () {
        var currentColor = colorList.thread[ $(this).val() ];
        $('.back-text').css('color', currentColor);
        calcPrice();
    });
}


module.exports = initColorComponent;