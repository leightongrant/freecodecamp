/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaQuoteLeft, FaTwitter } from 'react-icons/fa';
function Quotes({ quote, color, setColor, getColor, getQuote, tweet }) {
  const { content, author } = quote;

  function handleClick() {
    getQuote();
    setColor(getColor());
  }

  return (
    <Container>
      <div id='quote-box' style={{ color: color }}>
        <figure className='mb-5'>
          <blockquote className='blockquote text-center'>
            <FaQuoteLeft />
            <p id='text'>{content}</p>
          </blockquote>
          <figcaption className='blockquote-footer d-flex justify-content-end'>
            <span id='author'>{author}</span>
          </figcaption>
        </figure>
        <div className='d-flex gap-3'>
          <Button
            style={{ background: color, border: 0 }}
            id='tweet-quote'
            as='a'
            href={tweet}
            target='_blank'>
            <FaTwitter />
          </Button>
          <Button style={{ background: color, border: 0 }}>
            <FaInstagram />
          </Button>
          <Button
            style={{ background: color, border: 0 }}
            id='new-quote'
            className='ms-auto'
            onClick={handleClick}>
            New Quote
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Quotes;
