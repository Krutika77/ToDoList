import List from "./components/List";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <List />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
