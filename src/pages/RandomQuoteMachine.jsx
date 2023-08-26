import Quotes from '../components/Quotes';
import { useState } from 'react';

function RandomQuoteMachine() {
    const [quote, setQuote] = useState({
        text: 'Your time is limited, so don’t waste it living someone else’s life.',
        author: 'Steve Jobs',
    });
    const [color, setColor] = useState('navy');
    return (
        <section id='quote-box-wrapper' style={{ background: color }}>
            <Quotes quote={quote} setQuote={setQuote} color={color} />
        </section>
    );
}

export default RandomQuoteMachine;
