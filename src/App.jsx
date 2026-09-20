import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import JavaScriptCalculator from './pages/JavaScriptCalculator'
import RandomQuoteMachine from './pages/RandomQuoteMachine'

function App() {
    const queryClient = new QueryClient()
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/random-quote-machine"
                    element={
                        <QueryClientProvider client={queryClient}>
                            <RandomQuoteMachine />
                        </QueryClientProvider>
                    }
                />
                <Route path="/js-calc" element={<JavaScriptCalculator />} />
            </Routes>
        </Fragment>
    )
}

export default App
