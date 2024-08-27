import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from "./Quote"

function App() {
  const [quoteText, setQuoteText] = React.useState("");
  const [quoteAuthor, setQuoteAuthor] = React.useState("");
  /* style the background color, text color, a background color and button background color.*/
  const [styles, setStyles] = React.useState({});
  const colors = ["#D8E5F7", "D8EEDF", "F2D9EF", "#FDF1C9", "#FEDCDB", "D0C3F1", "CEEEF8", "#FFD7EE", "#F5CF9F", "#F5A7A6", "#C2E5CF", "#FFD1D3", "#CDD0F8", "#FFA7A6", "#B8E3E4"]

  /* fetch a quote when page loads, also generate a random color*/
  React.useEffect(() => {
    fetchNewQuote();
    setStyles(generateColorStyle());
  }, []);

  /* generates random color from array of colors*/
  function generateColorStyle() {
    // first one for the quote-container div, the other ones for the button and icons in <Quote /> component
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    console.log(`${randomColor}`);
    const styles = [{
      backgroundColor: `${randomColor}`,
      color: `${randomColor}`
    },
    {
      backgroundColor: `${randomColor}`,
    }]
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

  async function callAPI() {
    try {
      const response = await fetch("https://api.quotable.io/random", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      setQuoteText(result.content);
      setQuoteAuthor(result.author);

    } catch (error) {
      console.log(error);
    }
  }

  /* call API and generateColorStyle */
  function fetchNewQuote() {
    console.log("fetchNewQuote function called");
    setStyles(generateColorStyle());
    callAPI();
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