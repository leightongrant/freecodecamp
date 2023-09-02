/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
function Calculator({ displays, expressions }) {
  // States
  const [display, setDisplay] = displays;
  const [expression, setExpression] = expressions;

  // Event handlers
  function handleNum(e) {
    const val = e.target.value;

    if (display === 0 && val === "0") {
      return;
    }

    if (display === 0) {
      setDisplay(val);
      setExpression(val);
    }

    if (/[=]/.test(display)) {
      setExpression(val);
      setDisplay(val);
      return;
    }

    if (display !== 0) {
      setDisplay((pre) => pre + val);
      setExpression((pre) => pre + val);
    }
  }

  function handleDecimal(e) {
    const val = e.target.value;
    if (/[.]/.test(expression)) {
      return;
    }

    if (expression === 0) {
      setDisplay((pre) => (pre += val));
      setExpression((pre) => (pre += val));
      return;
    }

    if (/\D$/.test(display)) {
      setDisplay((pre) => (pre += `0${val}`));
      setExpression((pre) => (pre += `0${val}`));
      return;
    }

    if (/=/.test(display)) {
      setDisplay(`0${val}`);
      setExpression(val);
      return;
    }
    setDisplay((pre) => (pre += val));
    setExpression((pre) => (pre += val));
  }

  function handleOperator(e) {
    const val = e.target.value;

    if (/=/.test(display)) {
      setDisplay(expression);
    }

    if (expression === 0) {
      setExpression(val);
      setDisplay(val);
      return;
    }

    const operator = expression[expression.length - 1];

    if (expression !== 0) {
      if (/\D{2}$/.test(display)) {
        return;
      }

      if (/(\*{1}|\+{1}|\/{1}|-{1})/.test(operator) && val === "-") {
        setExpression(val);
        setDisplay((pre) => (pre += val));
        return;
      }

      if (/(\*{1}|\+{1}|\/{1})/.test(operator) && val !== "-") {
        console.log(val, "test");
        setExpression(val);
        setDisplay((pre) => {
          let newStr = pre.slice(0, pre.length - 1);
          return (newStr += val);
        });
        return;
      }
      setExpression(val);
      setDisplay((pre) => (pre += val));
    }
  }

  function handleEquals(e) {
    let val = e.target.value;
    let result;
    let finalExpression = display;

    if (/[=]/.test(display)) {
      return;
    }

    if (/^[/*]/.test(display)) {
      return;
    }

    if (/\D$/.test(display)) {
      return;
    }

    if (/^[0-9+-]/.test(display)) {
      if (/^[0-9+-].*\d$/.test(display)) {
        if (/-{2}/.test(finalExpression)) {
          result = eval(finalExpression.replace(/-+/g, "+"));
        } else {
          result = eval(finalExpression);
        }
      } else {
        result = eval(finalExpression);
      }
    }

    if (/\./.test(result)) {
      result = result.toFixed(4);
      if (/0+$/.test(result)) {
        result = result.replace(/0+$/, "");
      }
    }

    setDisplay((pre) => (pre += ` ${val} ${result}`));
    setExpression(result);
  }

  function handleClear() {
    setDisplay(0);
    setExpression(0);
  }

  // Main
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row id="calc">
        <div id="output" className="d-flex flex-column justify-content-center">
          <div id="display" className="d-flex justify-content-end">
            {display}
          </div>
          <div id="expression" className="d-flex justify-content-end">
            {expression}
          </div>
        </div>
        <Button
          className="btn btn-danger clear"
          id="clear"
          onClick={handleClear}
        >
          AC
        </Button>
        <Button
          id="devide"
          value="/"
          className="operator btn btn-info"
          onClick={handleOperator}
        >
          /
        </Button>
        <Button
          id="multiply"
          value="*"
          className="operator btn btn-info"
          onClick={handleOperator}
        >
          X
        </Button>
        <Button
          id="seven"
          value="7"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          7
        </Button>
        <Button
          id="eight"
          value="8"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          8
        </Button>
        <Button
          id="nine"
          value="9"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          9
        </Button>
        <Button
          id="subtract"
          value="-"
          className="operator btn btn-info"
          onClick={handleOperator}
        >
          -
        </Button>
        <Button
          id="four"
          value="4"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          4
        </Button>
        <Button
          id="five"
          value="5"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          5
        </Button>
        <Button
          id="six"
          value="6"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          6
        </Button>
        <Button
          id="add"
          value="+"
          className="operator btn btn-info"
          onClick={handleOperator}
        >
          +
        </Button>
        <Button
          id="one"
          value="1"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          1
        </Button>
        <Button
          id="two"
          value="2"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          2
        </Button>
        <Button
          id="three"
          value="3"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          3
        </Button>
        <Button
          id="equals"
          value="="
          className="operator btn btn-success"
          onClick={handleEquals}
        >
          =
        </Button>
        <Button
          id="zero"
          value="0"
          className="num btn btn-secondary"
          onClick={handleNum}
        >
          0
        </Button>
        <Button
          id="decimal"
          value="."
          className="num btn btn-secondary"
          onClick={handleDecimal}
        >
          .
        </Button>
      </Row>
    </Container>
  );
}

export default Calculator;
