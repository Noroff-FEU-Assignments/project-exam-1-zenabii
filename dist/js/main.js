// MENU //

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        showMenu = false;
    }
}

// LATEST POST //

const latestImage = document.querySelector(".grid_image");
const latestContent = document.querySelector(".latest_topic_grid");
const postUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&filter[posts_per_page]=1";

async function getImage(url){
    const response = await fetch(url);
    const latestPosts = await response.json();

    latestContent.innerHTML = `
        <div class="grid_image">
            <img src="${latestPosts[0]._embedded['wp:featuredmedia']['0'].source_url}" alt="Latest post" class="latest_image">
        </div>
        <div class="grid_content">
                <div class="hashtags">
                <a href="#" class="hashtag_gategory">#${latestPosts[0]._embedded["wp:term"][0][0].name}</a>
            </div>
            <h1 class="topic_name">
            ${latestPosts[0].title.rendered}
            </h1>
            <p class="lead_paragraph">${latestPosts[0].excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
            <div class="hashtags">
            <img src="img/arrow.svg" alt="read more button" class="arrow">
            </div>
        </div>
    
    `
}

getImage(postUrl);
