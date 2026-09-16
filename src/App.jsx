import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav";
import Home from "./component/home";
import About from "./component/about";
import Work from "./component/work";
import Contact from "./component/contact";
export default function App() {
  //   const Layout = () => {
  //     return (
  //       <>
  //         <Nav />

  //       </>
  //     );
  //   };

  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route element={<Nav/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
