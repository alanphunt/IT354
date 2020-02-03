import React from 'react';

function Contact() {
  return (
      <div className={"content"}>
        <h1>Contact Me</h1>
        <p>I'm always accessible and there's a number of ways to reach out to me or learn more about me.</p>
          <ul>
              <li>inquire@alanphunt.com</li>
              <li>aphunt@ilstu.edu</li>
              <li><a href={"https://www.alanphunt.com"} target={"_blank"}>www.alanphunt.com</a></li>
              <li><a href={"https://github.com/alpal309"} target={"_blank"}>GitHub</a></li>
          </ul>
      </div>
  )
}

export default Contact;