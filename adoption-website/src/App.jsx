import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pets from "./components/Pets";
import Layout from "./components/Layout";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Articles from "./components/Articles";
import NoPage from "./components/NoPage";
import Contact from "./components/Contact";
import Adoption from "./components/Adoption";
import PetDetails from "./components/PetDetails";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Other from "./components/Other";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="pets" element={<Pets />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="cats" element={<Cats />} />
          <Route path="other" element={<Other />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adoption" element={<Adoption />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="pet-details/:id" element={<PetDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
