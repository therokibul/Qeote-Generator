const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get Qoute From API

async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch( apiUrl);
    const data = await response.json();
    if (data.quoteAuthor === "") {
      authorText.innerText = "unknown";
    } else {
      authorText.innerText = data.quoteAuthor;
    }

    quoteText.innerText = data.quoteText;
  } catch (error) {
    getQuote();
  }
}

// ON Load
getQuote();
