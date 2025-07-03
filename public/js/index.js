"use strict"

const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
};

const quotes = [
  {
    quote: "All hands! Abandon ship!",
    author: "Captain Picard",
  },

  {
    quote: "Doh!",
    author: "Homer Simpson",
  },

  {
    quote: "Learning to code feels like sketching with logic—each line a brushstroke shaping a future I believe in, full of color, compassion, and pride.",
    author: "Kaleena Dybas",
  }
]

function loopThroughQuotes() {
  let quoteIndex = 0;
  setInterval(() => {
    if (quoteIndex < quotes.length) {
      elements.quote.textContent = quotes[quoteIndex].quote;
      elements.author.textContent = quotes[quoteIndex].author;
      quoteIndex++;
    } else {
      quoteIndex = 0;
    }
  }, 3000);
};

setTimeout(loopThroughQuotes, 3000);
