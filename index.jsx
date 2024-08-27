import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from "./Quote"

function App() {
  const [quoteText, setQuoteText] = React.useState("");
  const [quoteAuthor, setQuoteAuthor] = React.useState("");
  /* style the background color, text color, a background color and button background color.*/
  const [backgroundStyle, setBackgroundStyle] = React.useState({});

  /* fetch a quote when page loads, also generate a random color*/
  React.useEffect(() => {
    fetchNewQuote();
    setBackgroundStyle(generateColorStyle());
  }, []);

  /* generates random color from array of colors*/
  function generateColorStyle() {
    const styles = {
      backgroundColor: '#c1d3fe',
      color: '#c1d3fe'
    }
    console.log(styles);
    return styles;
  }

  /* fetches new quote from API and sets the appropriate states */
  function fetchNewQuote() {
    console.log("fetchNewQuote function called");
    setQuoteText("Quote text test");
    setQuoteAuthor("Quote author test");
  }


  return (
    <div id = "quote-container" style = {backgroundStyle}>
      <Quote 
      quoteText = {quoteText}
      quoteAuthor = {quoteAuthor}
      fetchNewQuote = {fetchNewQuote}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 