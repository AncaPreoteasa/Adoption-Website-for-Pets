import Header from "./Header";
import NavBar from "./NavBar";
import PetCard from "./PetCard";

export default function Pets() {
  return (
    <>
      <Header />
      <NavBar />
      <PetCard maxPets={false} />
    </>
  );
}
