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
    
    const modalSection = document.querySelector(".modal__section");
    const articleImage = document.querySelectorAll(".modal");
    const modalImg = document.querySelector(".modal__image-container");
    const modalExit = document.querySelector(".modal-exit");

    articleImage.forEach(function(imagesDoes) {
            imagesDoes.addEventListener("click", displayModal)
    });

    function displayModal(event) {
        modalSection.style.display = "flex";
        modalImg.innerHTML = `<img src="${event.target.src}" class="modal-image">`
    }

    modalExit.addEventListener("click", () => {
        modalSectionExit.style.display = "none";
        modalImg.innerHTML = "";
    });

    window.addEventListener("click", closeModalWindow);

    function closeModalWindow(classClick) {
        if(classClick.target === modalSection) {
            modalSection.style.display = "none";
        }
    }


}



getPost(url);