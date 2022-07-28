import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "antd/dist/antd.css";
import About from './components/About';
import Home from './components/Home';
import Market from './components/Market';
import Item from './components/Item';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/men" element={<Men />} /> */}
        <Route exact path="/men/pants" element={<Market category="pants" gender="men" />} />
        <Route exact path="/men/shorts" element={<Market category="shorts" gender="men" />} />
        <Route exact path="/men/sweatshirts" element={<Market category="sweatshirt" gender="men" />} />
        <Route exact path="/men/tees" element={<Market category="tees & tanks" gender="men" />} />

        <Route exact path="/women/dresses" element={<Market category="dresses" gender="women" />} />
        <Route exact path="/women/pants" element={<Market category="pants" gender="women" />} />
        <Route exact path="/women/shorts" element={<Market category="shorts" gender="women" />} />
        <Route exact path="/women/sweatpants" element={<Market category="sweatpants" gender="women" />} />
        <Route exact path="/women/tees" element={<Market category="tees & tanks" gender="women" />} />
        <Route exact path="/women/skirts" element={<Market category="skirt" gender="women" />} />
        <Route exact path="/women/rompers" element={<Market category="rompers & jumpsuits" gender="women" />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />

        <Route path="/market/:id" element={<Item />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
