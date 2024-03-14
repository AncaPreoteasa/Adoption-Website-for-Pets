import styles from "./Dogs.module.css";
import Header from "./Header";
import PetCard from "./PetCard";
import NavBar from "./NavBar";

export default function Dogs() {
  return (
    <>
      <Header />
      <NavBar />
      <PetCard category="Dog" />
    </>
  );
}
