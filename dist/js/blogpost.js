const params = new URLSearchParams(window.location.search);
const postId = params.get("id");
const url = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed" + postId;


async function getPost(url) {
    const response = await fetch(url);
    const product = await response.json();

    document.title = `${product.title.rendered}`;

}

getPost(url);