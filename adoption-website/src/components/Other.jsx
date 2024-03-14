import Header from "./Header";
import PetCard from "./PetCard";
import NavBar from "./NavBar";

export default function Other() {
  return (
    <>
      <Header />
      <NavBar />
      <PetCard category="Other" />
    </>
  );
}
