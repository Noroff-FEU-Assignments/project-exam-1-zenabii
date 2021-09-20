const baseUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed";
const allArticles = document.querySelector(".all_articles");
const latestImage = document.querySelector(".grid_image");
const latestContent = document.querySelector(".latest_topic_grid_reverse");
const readMore = document.querySelector(".read_more");
var loadCount = 0;

async function getPosts(url){
    loadCount++;
    const response = await fetch(url);
    const posts = await response.json();
    
    posts.forEach(function (post, index)  {
        if (index == 0) {
            return;
        }
        allArticles.innerHTML += `
        <div class="article">
        <a href="blog_post.html?id=${post.guid.rendered}">
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="Latest articles" class="article_image">
        <div class="hashtag_gategory">#${post._embedded["wp:term"][0][0].name}</div>
        <h3 class="topic_name" id="latest_title">
        ${post.title.rendered}
        </h3>
        </a>
        </div>
        `
    }); 
    if (loadCount == 2) {
        readMore.style.display = "none";
    }
}

getPosts(baseUrl);

readMore.onclick = () => getPosts("https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&page=2")



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
