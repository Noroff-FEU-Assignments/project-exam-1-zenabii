const params = new URLSearchParams(window.location.search);
const postId = params.get("id");
const url = "https://projectexam.zenabi.no/wp-json/wp/v2/posts/" + postId + "?_embed";
const blogTitle = document.querySelector(".blog_title");
const articlePage = document.querySelector(".article_page");


async function getPost(url) {
    const response = await fetch(url);
    const post = await response.json();

    document.title = `${post.title.rendered}`;
    blogTitle.innerHTML = post.title.rendered;
    articlePage.innerHTML = post.content.rendered;
    


}

getPost(url);


/* MODAL SCRIPT */

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".article_page img");
const original = document.querySelector(".full_img");

previews.forEach(preview => {
    preview.addEventListener(`click`, () => {
        modal.classList.add("open");
        console.log(preview);
    })
})