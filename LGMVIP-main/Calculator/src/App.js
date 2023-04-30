import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [calc, setCalc]=useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.']
  const updateCalc = value =>{
    // to not allow one operator beside another operator (e.g ++ not allowed)
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ){
      return;
    }
    // displays the digits on the screen
    setCalc(calc + value); 
    // display the output
    if (!ops.includes(value)){
      // Does all the operations 
      setResult(eval(calc + value).toString());
    }
  }
    const createDigits = () => {
      const digits = [];
      for(let i = 1; i<10; i++){
        digits.push(
          <button
           onClick={() => updateCalc(i.toString())} 
          key={i}>
          {i}
          </button>
        )
      }
      return digits;
    }
    //displays the result
    const calculate=()=>{
      setCalc(eval(calc).toString());
    }
    // delete operation
    const deleteL =()=>{
      if(calc === ''){
        return;
      }
      const value = calc.slice(0, -1);
      setCalc(value);
    }
    // Delete all
    const deleteAll=()=>{
      setCalc("");}

  return (
    <div className="App">
    <Header />
       <div className="calculator">
        <div className="display" value={result}>{calc || "0"}</div>
        <div  className="arithmetic">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={calculate}>=</button>
        </div>
        <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalc('0')}>0</button> 
        <button onClick={() => updateCalc('(')}>( </button>
        <button onClick={() => updateCalc(')')}>)</button>
        <button onClick={deleteL}>Del</button>
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={deleteAll}>AC</button>
      </div>
      </div>
    </div>
  );
}
export default App;
