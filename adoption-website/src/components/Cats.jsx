import styles from "./Cats.module.css";
import Header from "./Header";
import PetCard from "./PetCard";
import NavBar from "./NavBar";

export default function Cats() {
  return (
    <>
      <Header />
      <NavBar />
      <PetCard displayOnlyCats />
    </>
  );
}
