/* LATEST ARTICLE */

const latestImage = document.querySelector(".grid_image");
const latestContent = document.querySelector(".latest_topic_grid");
const postUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&per_page=1";

async function getImage(url){
    const response = await fetch(url);
    const latestPosts = await response.json();

    latestContent.innerHTML = `
    <a href="blog_post.html?id=${latestPosts[0].id}">
        <div class="grid_image">
            <img src="${latestPosts[0]._embedded['wp:featuredmedia']['0'].source_url}" alt="Photo of most recent article" class="latest_image">
        </div>
    </a>
        <div class="grid_content">
            <div class="hashtags">
                <a href="#" class="hashtag_gategory">#${latestPosts[0]._embedded["wp:term"][0][0].name}</a>
            </div>
            <h1 class="topic_name">
                ${latestPosts[0].title.rendered}
            </h1>
            <p class="lead_paragraph">${latestPosts[0].excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
            <div class="hashtags">
                <a href="blog_post.html?id=${latestPosts[0].id}">
                    <img src="img/arrow.svg" alt="read more button" class="arrow">
                </a>
            </div>
        </div>
    
    `
}

getImage(postUrl);


/*CAROUSEL*/

const postsApi = `https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&per_page=20`;


async function getSlider(url){
    const fetchPosts = await fetch(postsApi);
    const resultPosts = await fetchPosts.json();


    const caoruselContainer = document.querySelector(".carousel")
    const prevButton = document.querySelector("#carousel__button--prev");
    const nextButton = document.querySelector("#carousel__button--next");
    function makeCarousel(countPages, LengthCarousel) {
        caoruselContainer.innerHTML = "";
        for(let i = countPages; i < LengthCarousel; i++) {
            caoruselContainer.innerHTML += 
            `
            <div class="article">
            <a href="blog_post.html?id=${resultPosts[i].id}" class="caorusel_link">
            <img src="${resultPosts[i]._embedded['wp:featuredmedia']['0'].source_url}" class="article_image alternative_article_image" alt="Photo of an article">
            <div class="hashtag_gategory">#${resultPosts[i]._embedded["wp:term"][0][0].name}</div>
            <h3 class="topic_name" id="latest_title">
            ${resultPosts[i].title.rendered}
            </h3>
            <div class="hashtags_alternative">    
                <img src="img/arrow.svg" alt="read more button" class="arrow">
            </div>
            </a>
            </div>
            `
            ;
            if(`${resultPosts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}` === undefined) {
                continue;
            }
        }
    }

    prevButton.addEventListener("click", previousCarousel);
    nextButton.addEventListener("click", nextCarousel);

    function previousCarousel() {
        if (countPages > 0) {
            countPages = countPages - 1;
            lengthCarousel = countPages + widthNumber;
        }
        else {
            countPages = resultPosts.length - widthNumber - 1;
            lengthCarousel = resultPosts.length -1;
        }

        makeCarousel(countPages, lengthCarousel);
        console.log(countPages, lengthCarousel);
    }

    function nextCarousel() {

        countPages = countPages + 1;

        if (countPages >= resultPosts.length - widthNumber) {
           countPages = 0
        };

        lengthCarousel = countPages + widthNumber;

        if(lengthCarousel >= resultPosts.length) {
            lengthCarousel = resultPosts.length  
        }

        makeCarousel(countPages, lengthCarousel);
        console.log(countPages, lengthCarousel);
    }

    var checkScreenWidth = window.innerWidth;
    function checkWidthScreen(checkScreenWidth) {
        if (checkScreenWidth >= 1100) {
            widthNumber = 3;
            countPages = 0;
            makeCarousel(countPages, widthNumber);
        }
        else if (checkScreenWidth > 750 && checkScreenWidth < 1100) {
            widthNumber = 2;
            countPages = 0;
            makeCarousel(countPages, widthNumber);
        }
        else if (checkScreenWidth > 550 && checkScreenWidth <= 750) {
            widthNumber = 1;
            countPages = 0;
            makeCarousel(countPages, widthNumber);
        }
        else {
            widthNumber = 1;
            countPages = 0;
            makeCarousel(countPages, widthNumber);
        }
    }

    checkWidthScreen(checkScreenWidth);

    var countPages = 0;
    var widthNumber;
    var lengthCarousel = widthNumber;

    window.addEventListener("resize", checkChangesScreen);

    function checkChangesScreen() {
        widthOutput = window.innerWidth;
        checkWidthScreen(widthOutput)
    };
};


getSlider(postsApi);

/* SLIDER ENDS */


/*HIGHLIGH POSTS*/

const highlightUrl = "https://projectexam.zenabi.no/wp-json/wp/v2/posts?_embed&categories=5";
const highlightContainer = document.querySelector(".highlight_grid")


async function getHighlight(url){
    const response = await fetch(url);
    const posts = await response.json();
    
    posts.forEach(function (post)  {
        highlightContainer.innerHTML += `
        
        <div class="highlights">
        <a href="blog_post.html?id=${post.id}">
            <div class="grid_image_highlight">
                <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" class="hightlight_img" alt="Photo of an article">
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
                        <a href="blog_post.html?id=${post.id}">    
                        <img src="img/arrow.svg" alt="read more button" class="arrow">
                        </a>
                    </div>
                </div>
            </div>
        </a>
        </div>
        `
    }); 
}

getHighlight (highlightUrl);


