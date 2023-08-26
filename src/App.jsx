import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import RandomQuoteMachine from './pages/RandomQuoteMachine';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random-quote-machine' element={<RandomQuoteMachine />} />
      </Routes>
    </Fragment>
  );
}

export default App;
