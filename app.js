console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let form = document.getElementById("submitSearch");
let input = document.getElementById("searchWord");
let img = document.getElementById("img");
let feedBack = document.getElementById("feedBackParagraph");
let API_KEY = "icwGoW58vL6CfG8woVlJoWjTLCDR5EDy";

form.addEventListener("click", (event) => {
  event.preventDefault();
  getGif();
});

function getGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${input.value}`
  )
    .then((res) => {
        return res.json()
    }).then((body) => {
        console.log(body)
        img.src = body.data.images.original.url;
        input.value = "";
        if (body.data.user && body.data.user.username) {
        img.alt = `${body.data.title} by ${body.data.user.username}`
        img.title = `${body.data.title} by ${body.data.user.username}`
        };
    } 
    )
    .catch((err) => {
        if(err) {
        console.log(err)
        feedBack.textContent = err.message;
        } else {feedBack.textContent = "";}
    });
}

