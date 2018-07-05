var $ = require('jquery');
        require('jquery-ui-browserify');

var logoList = require('../datalists/logoList');
var calcPrice = require('../utils/calcPrice');

function initLogoComponent() {
    setElementsToPage();
    setEvents();
}

function logoSelectComponent(selectID,logoList) {
    logoList.sort(function(logoNameA, logoNameB) {
        var compA = logoNameA.value.toUpperCase();
        var compB = logoNameB.value.toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    logoList.map(function (mark) {
        $(selectID).append(`<option value=${mark.value} data-category=${mark.category}>${mark.text}</option>`);
    });
}

function setElementsToPage() {
    logoSelectComponent('#pillow-mark-front', logoList);
    logoSelectComponent('#pillow-mark-back', logoList);
}

function setEvents() { 
    $('select#pillow-mark-front').change(function () {
        var new_logo_path = $('#front-logo-img')
                                .attr('src')
                                .replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-front option:selected').val().replace(/\s+/g,'')+'.png');
        
        $('#front-logo-img').attr('src',new_logo_path);
        $('#headrest-logo-img').attr('src',new_logo_path);
        calcPrice();
    });

    $('select#pillow-mark-back').change(function () {
        var new_logo_path = $('#back-logo-img')
                                .attr('src')
                                .replace(/[А-Яа-яA-Za-z0-9-]+.png$/i, $('select#pillow-mark-back option:selected').val().replace(/\s+/g,'')+'.png');
        
        $('#back-logo-img').attr('src',new_logo_path);
        calcPrice();
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

    $('.front-logo, .back-logo, .headrest-logo').draggable({
        containment: "parent",
        stop: function(event, ui) {
            $( event.originalEvent.target ).one('click', function(e){ e.stopImmediatePropagation(); } );
        }
    });
}


module.exports = initLogoComponent;