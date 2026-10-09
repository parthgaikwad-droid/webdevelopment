const getquote = document.getElementById("get");
const quotetext = document.getElementById("quote");
const authortext = document.getElementById("author");


const quote=[
  {"quote":"The only person you are destined to become is the person you decide to be.","author":"Ralph Waldo Emerson"},
  {"quote":"You can have it all.You just cant have it all at once","author":"Oprah Winfrey"},
  {"quote":"The harm they do by their foolish and random writing it would be impossible to overestimate","author":"Oscar Wilde"},
  {"quote":"Goals transform a random walk into a chase","author":"Mihaly Csikszentmihalyi"},
  {"quote":"Life is 10% what happens to you and 90% how you react to it","author":"Charles R. Swindoll"},

];

function getrandomquote(){
   randomindex=Math.floor(Math.random()*quote.length);
   const selectedquote=quote[randomindex];
   quotetext.textContent=`${selectedquote.quote}`;
   authortext.textContent=`-${selectedquote.author}`;

}
getquote.addEventListener("click",getrandomquote);
window.onload=getrandomquote();
