import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Articles from "./components/Articles";
import NoPage from "./components/NoPage";
import Contact from "./components/Contact";
import Adoption from "./components/Adoption";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="home" element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="cats" element={<Cats />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adoption" element={<Adoption />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
