import React from "react"

export default function Quote(props) {
    return (
        <div id="quote-box">
            <h1 id = "text">{props.quoteText}</h1>
            <h2 id = "author">{props.quoteAuthor}</h2>
            {/* https://twitter.com/intent/tweet?text=[TEXT]&url=[URL]&hashtags=[HASHTAGS]
            https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.%22%20%20Ancient%20Indian%20Proverb
            https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22There%20are%20no%20traffic%20jams%20along%20the%20extra%20mile.%22%20Roger%20Staubach
            */}
            <a href="https://twitter.com/intent/tweet" target="_blank" className = "style-a" id="tweet-quote">twitter</a>
            {/* tumrbl intent url: https://www.tumblr.com/widgets/share/tool?canonicalUrl=[URL]&title=[TITLE]&caption=[CAPTION] 
            https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=%20Ancient%20Indian%20Proverb&content=Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
            https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Roger%20Staubach&content=There%20are%20no%20traffic%20jams%20along%20the%20extra%20mile.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
            */}
            <a href="https://www.tumblr.com/widgets/share/" target="_blank" className = "style-a" id = "tumblr-quote">tumblr</a>
            <button id="new-quote" onClick = {props.fetchNewQuote}>New Quote</button>
        </div>
    )
}