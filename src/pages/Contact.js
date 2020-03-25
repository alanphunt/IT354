import React from 'react';

const Contact = () => {
  return (
      <div className={"content"}>
          <div className={"card"}>
            <h1>Contact Me</h1>
            <p>I'm always accessible and there's a number of ways to reach out to me or learn more about me.</p>
              <ul>
                  <li>inquire@alanphunt.com</li>
                  <li>aphunt@ilstu.edu</li>
                  <li><a href={"https://www.alanphunt.com"} target={"_blank"}>www.alanphunt.com</a></li>
                  <li><a href={"https://github.com/alpal309"} target={"_blank"}>My GitHub</a></li>
              </ul>
          </div>
      </div>
  )
};

export default Contact;