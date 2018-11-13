var $ = require('jquery');
        require('jquery-ui-browserify');
        require('isomorphic-fetch');        
var Email = require('../libs/smtp');
var html2canvas = require('html2canvas');
var Dropbox = require('dropbox').Dropbox;
var i18n = require('../datalists/i18n');
var uuid = require('uuid/v4');
var InputMask = require('inputmask');

function initModalComponent() {
    InputMask('+7-999-999-99-99').mask($('#telephone'));
    setEvents();
};

function setEvents() {
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

    //Form submit
    $('#pillow-form').submit(function (e) {
        e.preventDefault();
        var body = form_prepost();
        var emailObj = {
            sender : "zzigsun@gmail.com",
            recipient : "myhop@mail.ru",
            theme : "Новый заказ!",
            text : `${body} <br/>`,
            token : {token : '090effd1-8c7f-4bd3-bc5e-17f35aa81394'}
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
};

function form_prepost() {
    
    var fields = {
        gosnum : ['pillow-type','pillow-main-color','pillow-mark-front','pillow-mark-back','pillow-auto-model-text',
                        'pillow-model-color','pillow-model-font','pillow-advanced-front-text','pillow-advanced-front-color',
                        'pillow-advanced-front-font','pillow-auto-num','pillow-auto-num-region','pillow-advanced-back-text',
                        'pillow-advanced-back-color', 'pillow-advanced-back-font','pillow-quantity','pillow-order-comment',
                        'customer_name', 'customer_phone','customer_email'],
        nogosnum : ['pillow-type','pillow-main-color','pillow-mark-front','pillow-mark-back','pillow-auto-model-text',
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
            if((field.name == 'pillow-model-color' || field.name == 'pillow-model-font') && $('#pillow-auto-model-text').val() == '') 
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
    
    var dbx = new Dropbox({ accessToken: '0SVCRi4gZ6AAAAAAAAAACc-YzVIUQImynkS_UPzMK14MsiKvrWVW4OCrrKFdLOX5' });
    
    html2canvas(document.querySelector(className))
        .then(function(canvas) {
            var attachment = canvas.toDataURL();
            var uniqueID = uuid();
            Email.send(
                emailObj.sender,
                emailObj.recipient,
                emailObj.theme,
                emailObj.text + `<b>Имя картинки </b>: ${uniqueID}.png <br/> 
                                <img src='${attachment}'/>`,
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
};

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
};


module.exports = initModalComponent;