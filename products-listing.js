const api_url =
    "https://fakestoreapi.com/products";

fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('apiData', JSON.stringify(data));

    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const cachedData = localStorage.getItem('apiData');
showProducts(cachedData);
function showProducts() {
    if (cachedData) {

        const data = JSON.parse(cachedData);
        // console.log(data);
        const carddiv = document.getElementById("productspage");
        carddiv.innerHTML = "";
        let div = "";
        const details = data.map((products) => {
            div += '<div class="productscard" >';
            div += '<div class="cardimgdiv"><img class= "cardimg" src="' + products.image + '"></div>';
            div += '<span  class="productname">' + products.title + '</span>';
            div += `<div class='utils'>`;
            div += '<span class ="price">' + products.price + '</span><div class="atcart">';
            div += `<button class ='cartreducelink' onclick="removeFrmCart()"><img src="./remove_FILL0_wght400_GRAD0_opsz48.png" class="cartimg1" alt="remove from Cart"></button>`;
            div += `<button class ='cartaddlink' onclick="addToCart()" ><img src="./add_FILL0_wght400_GRAD0_opsz48.png" class="cartimg1" alt="add to Cart"></button>`;
            div += `</div></div>`
            div += '</div>'
        });
        carddiv.innerHTML += div;
        searchList();
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function searchList() {

    const input = document.getElementById("input");
    const filter = input.value.toUpperCase();
    const cards = document.getElementById("productspage");
    const carddata = cards.getElementsByClassName('productscard');

    // console.log(carddata);
    const Output = Array.from(carddata).filter((data) => {

        if (data) {
            txtValue = data.textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                console.log(data);
                data.style.display = "";
            } else {
                data.style.display = "none";
            }
        }

    })

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addToCart(){

    const likedimg = document.getElementsByClassName("cartaddlink");
        // console.log(likedimg);
        var Output = Array.from(likedimg).filter((data) => {
            console.log(indexOf(data));
        });

        // console.log(document.getElementsByClassName("productscard").innerHTML);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeFrmCart(){

}