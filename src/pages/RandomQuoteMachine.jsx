import Quotes from '../components/Quotes';
import { useEffect, useState } from 'react';

function RandomQuoteMachine() {
    const [quote, setQuote] = useState('');
    const [color, setColor] = useState('rgb(255,255,255)');
    const [tweet, setTweet] = useState(null);

    function getColor() {
        const r = Math.random() * 200;
        const g = Math.random() * 200;
        const b = Math.random() * 200;
        return `rgb(${r},${g},${b})`;
    }

    async function getQuote() {
        try {
            const res = await fetch('https://api.quotable.io/random');
            if (res.status === 200) {
                const data = await res.json();
                setQuote(data);
                setTweet(
                    encodeURI(
                        `https://www.twitter.com/intent/tweet?text=${data.content} --${data.author}`
                    )
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuote();
        setColor(getColor());
    }, []);

    return (
        <section id='quote-box-wrapper' style={{ background: color }}>
            <Quotes
                quote={quote}
                setQuote={setQuote}
                color={color}
                setColor={setColor}
                getColor={getColor}
                getQuote={getQuote}
                tweet={tweet}
            />
        </section>
    );
}

export default RandomQuoteMachine;
