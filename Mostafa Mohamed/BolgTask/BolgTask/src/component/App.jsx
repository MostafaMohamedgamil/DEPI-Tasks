import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Post from "./Post";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 p-0" style={{backgroundColor:" #aaaaaa"}}>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/post" element={<Post />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
