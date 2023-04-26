
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <Simpsons/>
        <hr/>
        <Characters/>
    </div>
  );
}

export default App;
