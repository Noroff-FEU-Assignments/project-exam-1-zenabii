const latestImage = document.querySelector(".grid_image");
const latestContent = document.querySelector(".latest_topic_grid");
const postUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&per_page=1";

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



const baseUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&per_page=3";
const caoruselContainer = document.querySelector(".carousel")


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    
    posts.forEach(function (post)  {
        caoruselContainer.innerHTML += `
        <div class="carousel_item">
            <a href="blog_post.html?id=${post.guid.rendered}">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="Latest articles" class="article_image">
            <div class="hashtag_gategory">#${post._embedded["wp:term"][0][0].name}</div>
            <h3 class="topic_name" id="latest_title">
            ${post.title.rendered}
            </h3>
            <div class="hashtags_alternative">    
                <img src="img/arrow.svg" alt="read more button" class="arrow">
            </div>
        </a>
        </div>
        `
    }); 
}

getPosts(baseUrl);


const highlightUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&categories=5";
const highlightContainer = document.querySelector(".highlight_grid")


async function getHighlight(url){
    const response = await fetch(url);
    const posts = await response.json();
    
    posts.forEach(function (post)  {
        highlightContainer.innerHTML += `
        
        <div class="highlights">
        <a href="blog_post.html?id=${post.guid.rendered}">
            <div class="grid_image_highlight">
                <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="Amsterdam project" class="hightlight_img">
            </div>
            <div class="grid_content_highlight">
                <div class="hashtags">
                    <a href="#" class="hashtag_link">#${post._embedded["wp:term"][0][0].name}</a>
                </div>
                <h1 class="topic_name">
                    ${post.title.rendered}
                </h1>
                <p class="lead_paragraph">${posts[0].excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
                    <div class="hashtags">    
                        <img src="img/arrow.svg" alt="read more button" class="arrow">
                    </div>
                </div>
            </div>
        </a>
        </div>
        `
    }); 
}

getHighlight (highlightUrl);