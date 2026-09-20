import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import Quotes from '../components/Quotes'

function RandomQuoteMachine() {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['quote'],
        queryFn: getQuote,
    })
    const [color, setColor] = useState('rgb(255,255,255)')

    useEffect(() => {
        setColor(getColor())
    }, [])

    if (isLoading) {
        return (
            <div className="container">
                <p>Loading...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="container">
                <p>{error.message}</p>
            </div>
        )
    }

    function getColor() {
        const r = Math.random() * 200
        const g = Math.random() * 200
        const b = Math.random() * 200
        return `rgb(${r},${g},${b})`
    }

    async function getQuote() {
        const endPoint = `https://dummyjson.com/quotes/random`
        const res = await fetch(endPoint)
        const data = await res.json()
        return data
    }

    return (
        <section id="quote-box-wrapper" style={{ background: color }}>
            <Quotes
                quote={data.quote}
                author={data.author}
                color={color}
                setColor={setColor}
                getColor={getColor}
                refetch={refetch}
                tweet={encodeURI(
                    `https://www.twitter.com/intent/tweet?text=${data.quote} --${data.author}`,
                )}
            />
        </section>
    )
}

export default RandomQuoteMachine
