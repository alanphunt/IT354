import React from 'react';

function Home() {
    return (
        <div className={"content"}>
            <h1>Welcome!</h1>
            <p>The purpose of this website is for me to reiterate what I've learned in IT 354 through an interactive medium.</p>
            <p>To accomplish this, I'll be summarizing articles, posting demonstration video snippets, and
            incorporating concepts onto the website itself.</p>

            <h2>The "stack"</h2>
            <p>The color scheme is based on shades and complimentary colors of a dark gray, hex code #333.
                This was generated with the help of <a href={"https://www.mycolor.space"}>mycolor.space</a>. I'll primarily stick to
                #A46877, #333, and #fff. </p>
            <p>Fonts incorporated include an icon font from <a href={"https://material.io/resources/icons/?style=baseline"}>
                Material-Icons</a>, Open Sans for the header, and IBM Plex for the p, span, and a tags imported in the
                CSS page from<a href={"https://www.fonts.google.com"}> Google Fonts</a>.</p>
        </div>
    )
}

export default Home;