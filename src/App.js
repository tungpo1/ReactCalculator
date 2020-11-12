
import './App.css';
import Calculator from "./Components/Calculator";
import NumberProvider from "./Components/NumberProvider";
function App() {
  return (
    <NumberProvider>
  <Calculator />
    </NumberProvider>

  );
}

export default App;
