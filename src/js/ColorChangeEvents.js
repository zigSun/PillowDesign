const $ = require('jquery');
const colorList = require('./datalists/colorList');

var mapInputToDiv = [
    {
        inputSelector : "input[name=pillow-model-color]",
        divSelector : '.front-model'
    },
    {
        inputSelector : 'input[name=pillow-advanced-front-color]',
        divSelector : '.front-text'
    },
    {
        inputSelector : 'input[name=pillow-advanced-back-color]',
        divSelector : '.back-text'
    },
]

function setColorChange(list) {
    list.map(function (obj) {
        $(obj.inputSelector).change( function () {
            var currentColor = colorList[ $(this).val() ];
            
            $(obj.divSelector).css('color', currentColor);
            
            calculate_price();
        })
    });
};

module.exports = setColorChange()