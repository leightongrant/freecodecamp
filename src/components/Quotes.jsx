/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Quotes({ quote, author, color, setColor, getColor, refetch, tweet }) {
    function handleClick() {
        refetch()
        setColor(getColor())
    }

    return (
        <Container>
            <div id="quote-box" style={{ color: color, background: '#ffffff88' }}>
                <figure className="mb-5">
                    <blockquote className="blockquote text-center">
                        <FaQuoteLeft className="quote-icon fs-1 mb-5" />
                        <p id="text" className="fs-3">
                            {quote}
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer d-flex justify-content-center mt-5 ">
                        <span id="author" className="fs-5 text-muted">
                            {author}
                        </span>
                    </figcaption>
                </figure>
                <div className="d-flex gap-3 flex-wrap">
                    <Button
                        style={{ background: color, border: 0 }}
                        id="tweet-quote"
                        as="a"
                        href={tweet}
                        target="_blank"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <FaXTwitter />
                    </Button>
                    <Button
                        style={{
                            background: color,
                            border: 0,
                            borderRadius: 20,
                            padding: '10px 20px',
                        }}
                        id="new-quote"
                        className="ms-auto"
                        onClick={handleClick}
                    >
                        Get New Quote
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Quotes
