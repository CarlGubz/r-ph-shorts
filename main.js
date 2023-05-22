const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const memeFull = document.querySelector(".meme-generator .meme-full-link");


const updateDetails = (url, title, author, postLink) => {
   memeImage.setAttribute("src", url );
   memeTitle.innerHTML = title;
   memeAuthor.innerHTML = author ;
   memeFull.setAttribute("href", postLink);
};


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/philippines")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author, data.postLink);
        });
};


generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();


