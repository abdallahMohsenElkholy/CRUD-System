import { AddCategory } from "./addCategoryModule.js";
import { AddProduct } from "./addProductsModule.js";
import { Display } from "./displayProductsModule.js";
let addCat = new AddCategory
//add product
let add = new AddProduct()
let dis = new Display()
$('#addBtn').click(()=>{
    if ($('#addBtn').html === "update") {
        add.change()
    } else {
        add.addProduct()
        document.getElementById('addBtn').innerHTML = "ADD"
    }
})



//show
// $('#showBtn').click(()=>{
//    $('#pTable').fadeToggle(200)
//    $('body , html').animate({scrollTop:600},600)
// })

$('#showBtn , #show').click(()=>{

    dis.displayCustomerProduct()
    $('#backBtn').fadeIn(200)
    $('#settings').fadeOut(200)
})
$('#backBtn').click(()=>{
    $('#main-page').fadeOut(100)
    $('#settings').fadeIn(100)
})

let numberOfProducts = add.products.length

$(document).click((e)=>{
    if (e.target.dataset.del<numberOfProducts) {
        add.del(e.target.dataset.del);
    }
    else if (e.target.dataset.up<numberOfProducts) {
        add.updateBtn(e.target.dataset.up);
    }
})




