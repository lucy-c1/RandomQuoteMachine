import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from "./Quote"

function App() {
  const [quoteText, setQuoteText] = React.useState("");
  const [quoteAuthor, setQuoteAuthor] = React.useState("");

  /* fetch a quote when page loads */
  React.useEffect(() => {
    fetchNewQuote();
  }, []);

  /* fetches new quote from API and sets the appropriate states */
  function fetchNewQuote() {
    console.log("fetchNewQuote function called");
    setQuoteText("Quote text test");
    setQuoteAuthor("Quote author test");
  }


  return (
    <div>
      <Quote 
      quoteText = {quoteText}
      quoteAuthor = {quoteAuthor}
      fetchNewQuote = {fetchNewQuote}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 