/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
function Quotes({ quote, color }) {
  const { text, author } = quote;
  return (
    <div id='quote-box' style={{ color: color }}>
      <p id='text'>{text}</p>
      <p id='author'>{author}</p>
      <Button style={{ backgroundColor: color, border: 0 }}>
        <FaTwitter />
      </Button>
      <Button style={{ backgroundColor: color, border: 0 }}>
        <FaInstagram />
      </Button>
      <Button style={{ backgroundColor: color, border: 0 }}>New Quote</Button>
    </div>
  );
}

export default Quotes;
