import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import RandomQuoteMachine from './pages/RandomQuoteMachine';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/random-quote-machine' element={<RandomQuoteMachine />} />
    </Routes>
  );
}

export default App;
