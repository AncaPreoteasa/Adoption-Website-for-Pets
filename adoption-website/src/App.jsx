import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout"));
const Pets = lazy(() => import("./components/Pets"));
const Cats = lazy(() => import("./components/Cats"));
const Dogs = lazy(() => import("./components/Dogs"));
const Articles = lazy(() => import("./components/Articles"));
const NoPage = lazy(() => import("./components/NoPage"));
const Contact = lazy(() => import("./components/Contact"));
const Adoption = lazy(() => import("./components/Adoption"));
const PetDetails = lazy(() => import("./components/PetDetails"));
const SignUp = lazy(() => import("./components/SignUp"));
const LogIn = lazy(() => import("./components/LogIn"));
const Other = lazy(() => import("./components/Other"));
const SearchedPets = lazy(() => import("./components/SearchedPets"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route path="pets" element={<Pets />} />
            <Route path="searchedPets" element={<SearchedPets />} />
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
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
