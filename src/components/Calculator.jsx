/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
function Calculator({ output, expressions }) {
  const [display, setDisplay] = output;
  const [expression, setExpression] = expressions;

  function handleNum(e) {
    const val = e.target.value;
    if (/\./.test(expression) && val === '.') {
      return;
    }
    if (expression === 0) {
      setExpression(val);
      setDisplay(val);
    } else if (expression === '.') {
      setDisplay(`0.${val}`);
    } else if (/[0-9.]/.test(expression[expression.length - 1])) {
      setExpression(preVal => (preVal += val));
      setDisplay(preVal => (preVal += val));
    } else {
      setExpression(val);
      setDisplay(preVal => (preVal += val));
    }
  }
  function handleOperator(e) {
    const val = e.target.value;
    if (/\d/.test(expression[expression.length - 1])) {
      setExpression(val);
      setDisplay(pre => (pre += val));
    }
  }
  function handleEquals(e) {
    let val = e.target.value;

    if (!/=/.test(display)) {
      if (/^\d+$/.test(display) || expression === 0) {
        console.log(display, 'else block');
        if (display === null) {
          setDisplay(expression);
        } else {
          val += expression;
          setDisplay(pre => (pre += val));
        }
      } else if (/^\d+.+\d$/.test(display)) {
        let answer = eval(display);
        if (!Number.isInteger(answer)) {
          answer = answer.toFixed(2);
        }
        val += String(answer);
        setDisplay(pre => (pre += val));
        setExpression(answer);
      } else setDisplay('Invalid Expression');
    }
  }

  function handleClear() {
    setDisplay(null);
    setExpression(0);
  }

  return (
    <Container className='d-flex align-items-center justify-content-center'>
      <Row id='calc'>
        <output id='display'>{display}</output>
        <output id='expression'>{expression}</output>
        <Button className='btn btn-danger' id='clear' onClick={handleClear}>
          AC
        </Button>
        <Button id='devide' value='/' className='operator btn btn-info' onClick={handleOperator}>
          /
        </Button>
        <Button id='multiply' value='*' className='operator btn btn-info' onClick={handleOperator}>
          X
        </Button>
        <Button id='seven' value='7' className='num btn btn-secondary' onClick={handleNum}>
          7
        </Button>
        <Button id='eight' value='8' className='num btn btn-secondary' onClick={handleNum}>
          8
        </Button>
        <Button id='nine' value='9' className='num btn btn-secondary' onClick={handleNum}>
          9
        </Button>
        <Button id='subtract' value='-' className='operator btn btn-info' onClick={handleOperator}>
          -
        </Button>
        <Button id='four' value='4' className='num btn btn-secondary' onClick={handleNum}>
          4
        </Button>
        <Button id='five' value='5' className='num btn btn-secondary' onClick={handleNum}>
          5
        </Button>
        <Button id='six' value='6' className='num btn btn-secondary' onClick={handleNum}>
          6
        </Button>
        <Button id='add' value='+' className='operator btn btn-info' onClick={handleOperator}>
          +
        </Button>
        <Button id='one' value='1' className='num btn btn-secondary' onClick={handleNum}>
          1
        </Button>
        <Button id='two' value='2' className='num btn btn-secondary' onClick={handleNum}>
          2
        </Button>
        <Button id='three' value='3' className='num btn btn-secondary' onClick={handleNum}>
          3
        </Button>
        <Button id='equals' value='=' className='operator btn btn-success' onClick={handleEquals}>
          =
        </Button>
        <Button id='zero' value='0' className='num btn btn-secondary' onClick={handleNum}>
          0
        </Button>
        <Button id='decimal' value='.' className='num btn btn-secondary' onClick={handleNum}>
          .
        </Button>
      </Row>
    </Container>
  );
}

export default Calculator;
