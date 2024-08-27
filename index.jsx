import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from "./Quote"

function App() {
  const [quoteText, setQuoteText] = React.useState("");
  const [quoteAuthor, setQuoteAuthor] = React.useState("");
  /* style the background color, text color, a background color and button background color.*/
  const [styles, setStyles] = React.useState({});

  /* fetch a quote when page loads, also generate a random color*/
  React.useEffect(() => {
    fetchNewQuote();
    setStyles(generateColorStyle());
  }, []);

  /* generates random color from array of colors*/
  function generateColorStyle() {
    // first one for the quote-container div, the other ones for the button and icons in <Quote /> component
    const styles = [{
      backgroundColor: '#c1d3fe',
      color: '#c1d3fe'
    },
    {
      backgroundColor: '#c1d3fe',
    }]
    console.log(styles);
    return styles;
  }

  /* fetches new quote from API and sets the appropriate states 
  https://api.quotable.io/random
  format:
  {
  _id: string
  // The quotation text
  content: string
  // The full name of the author
  author: string
  // The `slug` of the quote author
  authorSlug: string
  // The length of quote (number of characters)
  length: number
  // An array of tag names for this quote
  tags: string[]
}
  */
  function fetchNewQuote() {
    console.log("fetchNewQuote function called");
    setQuoteText("I didn’t fail the test. I just found 100 ways to do it wrong.");
    setQuoteAuthor("Quote author test");
  }


  return (
    <div id = "quote-container" style = {styles[0]}>
      <Quote 
      quoteText = {quoteText}
      quoteAuthor = {quoteAuthor}
      fetchNewQuote = {fetchNewQuote}
      backgroundStyle = {styles[1]}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 