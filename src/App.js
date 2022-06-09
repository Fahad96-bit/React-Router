import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => {
  return <h1>Home</h1>;
};

export default App;
