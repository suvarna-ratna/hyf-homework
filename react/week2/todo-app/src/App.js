import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import listItem from "./TodoList";
import Heading from "./Heading";
import Timer from "./Timer";


function App() {
  return <div className="App">
    <Heading/>
    <Timer/>
    <Todo/>
    </div>;
}

export default App;
