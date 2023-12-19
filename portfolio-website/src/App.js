import "./App.css";
import MainNavBar from "./components/MainNavBar";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Main />
      <About />
      {/* <Portfolio /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
