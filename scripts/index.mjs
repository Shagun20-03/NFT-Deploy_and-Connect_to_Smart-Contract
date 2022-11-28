
import { createNewProduct } from "./utils.js"
// Alert the user when they "bought" a product
$("#card-container").on("click", "#buy-btn", function () {
    alert("Thank you for adding product");
});

// Handle page changes to add-product.html
$("#add-product").on("click", function () {
    window.location.href = "add-product.html";
});

// Handle form submit for add-product.html
$("#product-form").submit(async function (form) {
    form.preventDefault();

    const formElement = document.querySelector("#product-form");
    const formData = new FormData(formElement);
    console.log(formElement);
    console.log(formData);

    var result = await createNewProduct(formData);
    if (result) {
        console.log(result);
        //alert("Product has been added!");
        // window.location.href = "index.html";
    } else {
        alert("Failed to add product");
    }
});

$("#get-product").on("click", function () {
    window.location.href = "get-product.html";
});

$("#card-container").on("click", "#edit-btn", function () {
    // Get the id of the product
    var productID = $(this).parent().parent().parent().attr("id");
    var url = "update-product.html" + "?id=" + productID;
    window.location.href = url;
});