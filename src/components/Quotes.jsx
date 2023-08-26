/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
function Quotes({ quote, color }) {
    const { text, author } = quote;
    return (
        <div id='quote-box' style={{ color: color }}>
            <figure className='mb-5'>
                <blockquote className='blockquote text-center'>
                    <p id='text'>{text}</p>
                </blockquote>
                <figcaption className='blockquote-footer d-flex justify-content-end'>
                    <span id='author'>{author}</span>
                </figcaption>
            </figure>
            <div className='d-flex gap-3'>
                <Button
                    style={{ backgroundColor: color, border: 0 }}
                    id='tweet-quote'
                    as='a'
                >
                    <FaTwitter />
                </Button>
                <Button style={{ backgroundColor: color, border: 0 }}>
                    <FaInstagram />
                </Button>
                <Button
                    style={{ backgroundColor: color, border: 0 }}
                    id='new-quote'
                    className='ms-auto'
                >
                    New Quote
                </Button>
            </div>
        </div>
    );
}

export default Quotes;
