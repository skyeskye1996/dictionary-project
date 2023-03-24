import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="text-center pt-2">Dictionary</h1>
          <Dictionary defaultKeyword="Brave" />
        </main>
        <footer className="text-center pb-5">
          <a href="https://github.com/skyeskye1996/dictionary-project">
            Open-source
          </a>{" "}
          and coded by Skye
        </footer>
      </div>
    </div>
  );
}

export default App;