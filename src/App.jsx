import "./App.css";
import CurrentTime from "./components/CurrentTime";
import Heading from "./components/Heading";
import Slogan from "./components/Slogan";
function App() {
  return (
    <>
      <div className="app">
        <Heading />
        <Slogan />
        <CurrentTime />
      </div>
    </>
  );
}

export default App;
