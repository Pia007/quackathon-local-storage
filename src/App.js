import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Favorites from "./components/Favorites";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
