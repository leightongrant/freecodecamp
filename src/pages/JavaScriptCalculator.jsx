import Calculator from '../components/Calculator';
import { useState } from 'react';

function JavaScriptCalculator() {
  const [result, setResult] = useState('result');
  const [expression, setExpression] = useState(0);
  return (
    <section id='js-calc' className='d-flex align-items-center justify-content-center'>
      <Calculator results={[result, setResult]} expressions={[expression, setExpression]} />
    </section>
  );
}

export default JavaScriptCalculator;
