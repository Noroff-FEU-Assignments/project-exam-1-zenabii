// const jacket = document.querySelector(".jacket");
// const productTitle = document.querySelector("title").innerHTML = "Product details";
// const price = document.querySelector(".price");
// const info = document.querySelector(".all-info-text");
// const title = document.querySelector(".product-title");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const url = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed" + productId;

async function getProduct(url) {
    const response = await fetch(url);
    const product = await response.json();

    // price.innerHTML = product.prices.price + ",-"
    // info.innerHTML = product.description
    // title.innerHTML = product.name

    // jacket.innerHTML += `
    // <div class="second-details"><img src="${product.images[0].src}" class="imgproduct"></div>
    // `;

}

getProduct(url);
