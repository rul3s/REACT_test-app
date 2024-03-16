import logo from "./logo.svg";
import "./App.css";
import SimpleComponent from "./components/SimpleComponent";
import ButtonLogRandom from "./components/ButtonLogRandom";
import SimpleButtonCounter from "./components/SimpleButtonCounter";
import DisplayButtonCounter from "./components/DisplayCounterApp/DisplayButtonCounter";
import "./styles/default.css";

function App() {
  return (
    <div>
      <h1>React Testing Components</h1>
      <SimpleComponent />
      <ButtonLogRandom />
      <SimpleButtonCounter />
      <DisplayButtonCounter />
    </div>
  );
}

export default App;
