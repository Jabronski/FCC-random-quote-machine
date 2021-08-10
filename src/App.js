import React, { useEffect, useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'

let quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

  // Calling the API
  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArr(parsedJSON.quotes); // Call setQuotesArr and pass in the value from JSON.quotes
  }

  // Function for delivering API URL, not sure exactly
  useEffect(() => {
    fetchQuotes(quotesURL)
  }, [quotesURL])

  // Initial value for text and author, because I can't initialize 
  const quoteAndAuthor = [
    { quote: "You may be disappointed if you fail, but you are doomed if you don’t try.", author: "Beverly Sills" },
  ]

  // [variable name, change state function] = setState(value)
  const [quote, setQuote] = useState(quoteAndAuthor[0].quote);
  const [author, setAuthor] = useState(quoteAndAuthor[0].author);
  const [quotesArr, setQuotesArr] = useState(null);
  const [ourColor, setOurColor] = useState("#" + Math.floor(Math.random() * 16777215).toString(16))

  // Is called when button is pressed (onClick)
  const generator = () => {
    let randomInteger = Math.floor(Math.random() * quotesArr.length)
    setOurColor("#" + Math.floor(Math.random() * 16777215).toString(16))
    setQuote(quotesArr[randomInteger].quote);
    setAuthor(quotesArr[randomInteger].author);
    console.log(ourColor);
  }
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: ourColor }}>

        <div id="wrapper">

          {/* The quote generator */}
          <div id="quote-box" style={{ color: ourColor }}>

            <div id="upper">
              <p id="text">
                "{quote}"
              </p>

              <p id="author">
                - {author}
              </p>
            </div>

            <div id="lower">

              <a style={{ backgroundColor: ourColor }} class="button" id="tweet-quote" target="blank_" href={encodeURI(`http://www.twitter.com/intent/tweet?text="${quote}" - ${author}`)}><FontAwesomeIcon icon={faTwitter} /></a>
              <a style={{ backgroundColor: ourColor }} class="button" id="tumblr-quote" target="blank_" href={encodeURI(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='"${quote}" - ${author}`)}><FontAwesomeIcon icon={faTumblr} /></a>
              <a style={{ backgroundColor: ourColor }} class="button" id="new-quote" href="#"
                onClick={() => {
                  generator();
                }}>New Quote
              </a>
              
            </div>

          </div>

          {/* The credits */}
          <div id="footer">
            <p id="footer-text">by Jabronski</p>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
