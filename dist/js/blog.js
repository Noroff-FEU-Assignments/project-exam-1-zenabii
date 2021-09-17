const baseUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed";
const allArticles = document.querySelector(".all_articles");
const latestImage = document.querySelector(".grid_image");


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function (post)  {
        allArticles.innerHTML += `
        <div class="article">
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="Latest articles" class="article_image">
        <div class="hashtag_gategory">#${post._embedded["wp:term"][0][0].name}</div>
        <h3 class="topic_name" id="latest_title">
        ${post.title.rendered}
        </h3>
        
        </div>
        
        `
    }); 
}

getPosts(baseUrl);


async function getImage(url){
    const response = await fetch(url);
    const post = await response.json();
    post.forEach(function(post) {
        latestImage.innerHTML += `
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="Latest post" class="latest_image">
        
        
        `
    });
}

getImage(baseUrl);