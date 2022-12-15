import { validations } from "./validationModule.js"
let validation = new validations()
export class AddCategory {
    constructor() {
        let categoryArray;
        if (localStorage.getItem("category") == null) {
            categoryArray = [];
        }
        else {
            categoryArray = JSON.parse(localStorage.getItem("category"));
            let set = new Set(...[categoryArray])
            set.forEach(cat => {
                
                $('#productCategory').append(`<option value="${cat}">${cat}</option>`)         
            });
        }
        $('#addCat').click(()=>{$('#newCategory').slideDown(200)})
        $('#addSure').click(this.addSure)
    }

    addSure() {
        let categoryArray;
        if (localStorage.getItem("category") == null) {
            categoryArray = [];
        }
        else {
            categoryArray = JSON.parse(localStorage.getItem("category"));
        }
        let newCat = $('#newCategory input')[0].value
        if (validation.categoryValidation(newCat)) {
            categoryArray.push(newCat)
            localStorage.setItem("category", JSON.stringify(categoryArray))
            $('#newCategory input')[0].value=''
            $('#newCategory').slideUp(200)
            let set = new Set(...[categoryArray])
            set.forEach(cat => {
                
                $('#productCategory').append(`<option value="${cat}">${cat}</option>`)         
            });

            // this.asd()
            
        }
    }
}