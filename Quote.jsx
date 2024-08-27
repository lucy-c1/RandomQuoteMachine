import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Quote(props) {
    return (
        <div id="quote-box">
            <div className = "quotetext-container">
                <FontAwesomeIcon icon={faQuoteLeft} size = "2x"/>
                <span id = "text">{props.quoteText}</span>
            </div>
            <div className = "author-container">
                <h2 id = "author">- {props.quoteAuthor}</h2>
            </div>
            {/* https://twitter.com/intent/tweet?text=[TEXT]&url=[URL]&hashtags=[HASHTAGS]
            https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.%22%20%20Ancient%20Indian%20Proverb
            https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22There%20are%20no%20traffic%20jams%20along%20the%20extra%20mile.%22%20Roger%20Staubach
            */}
            {/* tumrbl intent url: https://www.tumblr.com/widgets/share/tool?canonicalUrl=[URL]&title=[TITLE]&caption=[CAPTION] 
            https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=%20Ancient%20Indian%20Proverb&content=Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
            https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Roger%20Staubach&content=There%20are%20no%20traffic%20jams%20along%20the%20extra%20mile.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
            */}
            <div className = "bottom-container">
                <div className = "icons-container">
                    <a href="https://twitter.com/intent/tweet" target="_blank" className = "style-a" id="tweet-quote" style = {props.backgroundStyle}><FontAwesomeIcon icon={faTwitter} size = "lg" className = "icon" /></a>
                    <a href="https://www.tumblr.com/widgets/share/" target="_blank" className = "style-a" id = "tumblr-quote" style = {props.backgroundStyle}><FontAwesomeIcon icon={faTumblr} size = "lg" className = "icon" /></a>
                </div>
                <button id="new-quote" onClick = {props.fetchNewQuote} style = {props.backgroundStyle}>New Quote</button>
            </div>
        </div>
    )
}