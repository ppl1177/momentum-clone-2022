const quotes = [
    {quote: "When you have faults, do not fear to abandon them",
     author: "Confucius"},
    {quote: "They must often change who would be constant in happiness or wisdom.",
     author: "Confucius"},
    {quote: "Age is no guarantee of maturity.",
     author: "Blackwell"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
     author: "Nelson Mandela"},
    {quote: "Life is either a daring adventure or nothing at all.",
     author: "Helen Keller"},
    {quote: "The goal of life is living in agreement with nature.",
     author: "Zeno"},
    {quote: "Only I can change me life, no one can do it for me.",
     author: "Carol Burnett"},
    {quote: "Life is unfair, get used to it.",
     author: "Bill Gates"},
    {quote: "All you need in this life is ignorance and confidence, then success is sure.",
     author: "Mark Twain"},
    {quote: "Despite the forecast, live like it’s spring.",
     author: "Lilly Pulitzer"}
    ]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
