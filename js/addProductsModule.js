import { Display } from "./displayProductsModule.js";
import { validations } from "./validationModule.js"
let validation = new validations()

export class AddProduct{
    constructor(){ 
        this.inde;
        this.products;
        if (localStorage.getItem("product") == null) {
            this.products = [];
        }
        else {
            this.products = JSON.parse(localStorage.getItem("product"));
        }
        
        this.pCategory = document.getElementById('productCategory')
        this.pStatus = document.getElementById('productStatus')
        this.inp0 = document.getElementById('inp0')
        this.inp2 = document.getElementById('inp2')
            var arr=[]
            let set = new Set(...[this.products])
            set.forEach(pro => {
                arr.push(pro.pName);
            });
        this.existBoolean = true
        this.inp0.addEventListener('input',function () {
            for(let ele of arr){
                if(ele===this.value){
                    this.existBoolean=false
                    break
                }else {
                    this.existBoolean=true
                }
            };
            validation.nameValidation(this.value ,this.existBoolean)
        })
        this.inp2.addEventListener('input', function () {
            validation.priceValidation(this.value)
        })
        this.radio()

    }

    addProduct() {
        let num =$('#inp0').val()
        let price = $('#inp2').val()
        let discount = $('#inp5 input').val()
        let v1 = validation.nameValidation(num ,true)
        let v2 = validation.priceValidation(price)
        let v3 = validation.discountValidation(discount)
        if (v1 && v2 && v3&&num!=''&&this.existBoolean) {
            if (discount == '') {
                discount = 0
            }
            let productObj = {
                pName: num,
                pPrice: price,
                pStatus: this.pStatus.value,
                pCategory: this.pCategory.value,
                pDiscount: discount,
            }
            this.products.push(productObj)
            localStorage.setItem("product", JSON.stringify(this.products))
            

        }
        this.clear()

        

    }

    clear(){
        $('#inp0').val('')
        $('#inp2').val('')
        $('#inp05').val('')
        $('#inp5 input').val('')
        let display = new Display()
    }

    radio() {
        let rds = $('input[name="discount"]')
        for (let i = 0; i < rds.length; i++) {
            rds[i].addEventListener('click', function () {
                if (this.id == 'r2') {
                    $('#inp5').slideDown(200)
                } else {
                    $('#inp5').slideUp(200)
                }
            })

        }
    }

    del(index) {
        this.products.splice(index, 1);
        localStorage.setItem("product", JSON.stringify(this.products));
        let display = new Display()
    }

    updateBtn(index) {
        this.globalIndex = index;
        document.getElementById('inp0').value = this.products[index].pName;
        document.getElementById('inp2').value = this.products[index].pPrice;
            if (this.products[index].pDiscount!=0) {
                document.querySelector('#inp5 input').value= this.products[index].pDiscount;
                $('inp5').slideDown(200);
                $('r2').attr('checked')
    
            }else $('#r1').attr('checked')  
        document.getElementById('addBtn').innerHTML = "Update"
        this.del(index)
        this.inde = index
    }


   
    change() {
        let num =$('#inp0').val()
        let price = $('#inp2').val()
        let discount = $('#inp5 input').val()
        let v1 = validation.nameValidation(num ,true)
        let v2 = validation.priceValidation(price)
        let v3 = validation.discountValidation(discount)
        if (v1 && v2 && v3&&num!='') {
            if (discount == '') {
                discount = 0
            }
            let productObj = {
                pName: num,
                pPrice: price,
                pStatus: this.pStatus.value,
                pCategory: this.pCategory.value,
                pDiscount: discount,
            }
            this.products.splice(this.inde,1,productObj)
            let display = new Display()
        }
        console.log(this.inde);
        localStorage.setItem("product", JSON.stringify(this.products))
   }


}