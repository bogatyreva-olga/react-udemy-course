import './App.css';
import PerInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
        <PerInfo animal="cat" age="5" hasPat={false}/>

    </div>
  );
}

export default App;
