import Calculator from '../components/Calculator';
import { useState } from 'react';

function JavaScriptCalculator() {
  const [display, setDisplay] = useState(0);
  const [expression, setExpression] = useState(0);
  return (
    <section id='js-calc' className='d-flex align-items-center justify-content-center'>
      <Calculator displays={[display, setDisplay]} expressions={[expression, setExpression]} />
    </section>
  );
}

export default JavaScriptCalculator;
