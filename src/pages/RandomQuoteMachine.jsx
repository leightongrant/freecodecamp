import Quotes from '../components/Quotes';
import { useEffect, useState } from 'react';

function RandomQuoteMachine() {
    const [quote, setQuote] = useState({
        _id: '1WZnUSS47PTK',
        content:
            'We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.',
        author: 'James Freeman Clarke',
        tags: ['Famous Quotes'],
        authorSlug: 'james-freeman-clarke',
        length: 117,
        dateAdded: '2021-04-15',
        dateModified: '2023-04-14',
    });
    const [color, setColor] = useState('rgb(255,255,255)');

    function getColor() {
        const r = Math.random() * 200;
        const g = Math.random() * 200;
        const b = Math.random() * 200;
        return `rgb(${r},${g},${b})`;
    }

    useEffect(() => {
        //setColor(getColor());
    }, []);

    return (
        <section id='quote-box-wrapper' style={{ background: color }}>
            <Quotes
                quote={quote}
                setQuote={setQuote}
                color={color}
                setColor={setColor}
                getColor={getColor}
            />
        </section>
    );
}

export default RandomQuoteMachine;
