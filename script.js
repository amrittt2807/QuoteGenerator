// variable declaration
const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const loader = document.getElementById('loader');
const newQuoteBtn = document.getElementById("new-quote");

let apiQuote = [];

//Getting Quotes and storing it apiQuote
let getQuote = async () => {
    showLoader(true)
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote()
  } catch (error) {
    console.log(error);
  }
};

// calling on Load && on hitting the "New Quote" Button
const newQuote = () => {
    showLoader(true)
  const currentQuote =apiQuote[Math.floor(Math.random() * apiQuote.length)];
  let {text,author} = currentQuote
  quote.textContent = text;
  quoteAuthor.textContent= `~ ${author?author:"UnKnown"}`
  showLoader(false)
};
twitterButton.addEventListener('click',()=>alert('feature not added !'))
newQuoteBtn.addEventListener("click",newQuote)

//ShowLoader
const showLoader =(str)=>{
    loader.hidden= str?false :true;
    quoteContainer.hidden= !str?false:true
}
//HideLoader

//on Load
getQuote();
