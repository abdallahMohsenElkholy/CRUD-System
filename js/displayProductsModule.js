

export class Display {
    constructor() {
        this.products;
        if (localStorage.getItem("product") == null) {
            this.products = [];
        }
        else {
            this.products = JSON.parse(localStorage.getItem("product"));
        }
        this.display()
    }


    display() {

        let productBox = ``
        for (var i = 0; i < this.products.length; i++) {
            productBox += `
            <tr>
            <td>${i + 1}</td>
            <td>${this.products[i].pName}</td>
            <td>${this.products[i].pPrice}</td>
            <td>${this.products[i].pCategory}</td>
            <td>${this.products[i].pStatus}</td>
            <td><button class="btn btn-danger" data-del=${i} >Delete</button></td>
            <td><button class="btn btn-warning" data-up=${i}>Update</button></td>
            </tr>
            `;
        }
        document.getElementById('productPlace').innerHTML = productBox;
    }

    displayCustomerProduct() {
        let box;
        if (this.products.length == 0) {
            box = `<p class="text-danger text-center" id="prag">no items</p>`
        } else box = ``
        let newPrice;
        let del;
        let mark;
        this.products.forEach((product, i) => {
            if (product.pDiscount == 0) {
                product.pDiscount = 'no discount'
                newPrice = ''
                del = 'span'
                mark = ''
            } else {
                mark = '%'
                del = 'del'
                newPrice = (((product.pPrice.split('')).filter(ele => !isNaN(ele)).join('')) - (((product.pPrice.split('')).filter(ele => !isNaN(ele)).join('')) * ((product.pDiscount) / 100))) + ((product.pPrice.split('')).filter(ele => isNaN(ele)).join(''))
            }
            box += `
            <div class="col-md-4 col-sm-6">
            <div class="product rounded-4 overflow-hidden">
                <div class="product-img">
                    <img class="w-100" src="img/istockphoto-845796622-612x612.jpg" alt="">
                </div>
                <div class="about-product bg-secondary bg-opacity-50 p-3">
                    <div class="product-info">
                        <h4 class="mx-auto ">${product.pName}<span class='fw-lighter ms-2 text-primary'>(${product.pCategory})</span></h4>
                        <p>${product.pStatus}</p>
                    </div>
                    <div class="price d-flex">
                        <h2 class="text-success ms-2">Price:</h2>
                        <p class='py-2 ms-3 text-primary'>${newPrice}</p>
                        <p class='py-2 ms-3 text-black-50'><${del}>${product.pPrice}</${del}></p>
                    </div>
                    <div class="product-add d-flex align-items-center justify-content-between">
                        <div class="discount pt-3">
                            <p>Discount :${product.pDiscount}<span class='fw-bolder text-danger'>${mark}</span></p>
                        </div>
                        <div class="add-btn">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        });

        document.getElementById("main-page").innerHTML = box
    }


}