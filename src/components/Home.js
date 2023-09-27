import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className="container">
      <h2 className="title">Welcome to Our Page!</h2>
      <p className="Paragraph-content">
        Lorem Ipsum is simply filler text
        of printing presses and text files. Lorem
        Ipsum has been the standard dummy text for
        industries since the year 1500, when a printer
        (N. of the T. person who is dedicated to printing) unknown
        used a gallery of texts and mixed them in such a way that
        he managed to make a specimen textbook.
      </p>
      <p className="Paragraph-content">
        It is a long-established fact that a reader
        will be distracted by the text content of a
        site while looking at its design. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using text such as Content here, content here.
      </p>
    </div>
  );
}

export default Home;
