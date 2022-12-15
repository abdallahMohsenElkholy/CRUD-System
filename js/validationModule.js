export class validations {
    constructor() {}
    
    nameValidation(num,boo) {
        let numRegrx = /^([a-z]|[A-Z]){3,12}[ ]?[0-9]{0,5}$/
        if (numRegrx.test(num)&&num!=''&&num!=undefined&&boo) {
            $('#errName').fadeOut(500)
            $('#inp0').addClass('border-success').removeClass('border-danger');
           return true
        } else {
            if(!boo){
                $('#inp0').next().html('product is already existing')
                $('#errName').fadeIn(500)
                return false
            }else{
                $('#inp0').next().html(' inter a valid name "between (3-12)characters"')
                $('#errName').fadeIn(500)
                $('#inp0').addClass('border-danger').removeClass('border-success');
                return false
            }
        }
    }

    priceValidation(price) {
        let priceRegrx = /^[1-9][0-9]{0,}(\$|LE|le|€)?$/
        if (priceRegrx.test(price)&&price!=''&&price!=undefined) {
            $('#errPrice').fadeOut(500)
            $('#inp2').addClass('border-success')
            document.getElementById('inp2').classList.replace('border-danger','border-success')
            return true
        } else {
            $('#errPrice').fadeIn(500)
            $('#inp2').addClass('border-danger')
            document.getElementById('inp2').classList.replace('border-success','border-danger')
            return false
        }
    }

    discountValidation(discount) {
        let discountRegrx = /^[1-9][0-9]?$/
        if (discountRegrx.test(discount)||discount=='') {
            return true
        } else {
            return false
        }
    }

    categoryValidation(cat) {
        let catRegrx = /^[a-zA-Z]{3,12}$/
        if (catRegrx.test(cat)) {
            $('#inp1').addClass('border-success')
            return true
        } else {
            $('#inp1').addClass('border-danger')
            return false
        }
    }

}