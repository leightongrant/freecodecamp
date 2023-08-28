import Container from 'react-bootstrap/Container';
function Calculator() {
  return (
    <Container className='d-flex align-items-center justify-content-center'>
      <div id='calc'>
        <div id='display'>DISPLAY</div>
        <div id='clear'>AC</div>
        <div id='devide' className='operator'>
          /
        </div>
        <div id='multiply' className='operator'>
          X
        </div>
        <div id='seven' className='num'>
          7
        </div>
        <div id='eight' className='num'>
          8
        </div>
        <div id='nine' className='num'>
          9
        </div>
        <div id='subtract' className='operator'>
          -
        </div>
        <div id='four' className='num'>
          4
        </div>
        <div id='five' className='num'>
          5
        </div>
        <div id='six' className='num'>
          6
        </div>
        <div id='add' className='operator'>
          +
        </div>
        <div id='one' className='num'>
          1
        </div>
        <div id='two' className='num'>
          2
        </div>
        <div id='three' className='num'>
          3
        </div>
        <div id='equals' className='operator'>
          =
        </div>
        <div id='zero' className='num'>
          0
        </div>
        <div id='decimal' className='num'>
          .
        </div>
      </div>
    </Container>
  );
}

export default Calculator;
