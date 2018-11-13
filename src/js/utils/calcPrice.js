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
            if (pillow_auto_model != '' &&  typeof pillow_auto_model != 'undefined') {
                finish_price+=100;
                if(pillow_model_color == 'silver' || pillow_model_color == 'gold') 
                    finish_price+=50;
            }
            if(pillow_advanced_front_text != '' && typeof pillow_advanced_front_text != 'undefined') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver' || pillow_advanced_front_color == 'gold')
                    finish_price+=50;
            }
            
            if(pillow_advanced_reverse_text != ''  && typeof pillow_advanced_reverse_text != 'undefined') {
                finish_price+=100;
                if(pillow_advanced_reverse_color == 'silver' || pillow_advanced_reverse_color == 'gold')
                    finish_price+=50;
            }
            finish_price*=quantity;
            break;
        case 'headrest':
            finish_price+=450;
            finish_price+=pillow_auto_mark_front_cat*100;
            if(pillow_advanced_front_text != '' && typeof pillow_advanced_front_text != 'undefined') {
                finish_price+=100;
                if(pillow_advanced_front_color == 'silver' || pillow_advanced_front_color == 'gold')
                    finish_price+=50;
            }
            finish_price*=quantity;
            break;
    }
    set_price(finish_price);
}

function set_price(number) {
    $('#pillow-current-price-num').text(number);
}

module.exports = calculate_price;