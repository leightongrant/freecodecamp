/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
function Calculator({ results, expressions }) {
  // States
  const [result, setResult] = results;
  const [expression, setExpression] = expressions;

  // Event handlers
  function handleNum(e) {
    const val = e.target.value;
   console.log(val)
    
  }

  function handleOperator(e) {
    const val = e.target.value;
    console.log(val)
  }

  function handleEquals(e) {
    let val = e.target.value;
    console.log(val)
  }

  function handleClear() {
    setResult('cleared');
    setExpression(0);
  }

  // Main
  return (
    <Container className='d-flex align-items-center justify-content-center'>
      <Row id='calc'>
        <div id='display' className='d-flex flex-column justify-content-center' >
          <div id='result' className='d-flex justify-content-end'>{result}</div>
          <div id='expression' className='d-flex justify-content-end'>{expression}</div>
        </div>        
        <Button className='btn btn-danger clear' id='clear' onClick={handleClear}>
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
