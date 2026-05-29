let btn = document.querySelector("#btn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

const url = "https://dummyjson.com/quotes/random";

btn.addEventListener("click", getQuote);

async function getQuote() {

    try {

        quote.innerText = "Loading...";
        author.innerText = "";

        let response = await fetch(url);

        let data = await response.json();

        quote.innerText = `"${data.quote}"`;

        author.innerText = `- ${data.author}`;

    }

    catch(error) {

        quote.innerText = "Something went wrong";

        author.innerText = "";

        console.log(error);

    }

}