import Header from "./Header";
import NavBar from "./NavBar";
import AccordionComponent from "./AccordionComponent";
import styles from "./Adoption.module.css";
import Footer from "./Footer";

export default function Adoption() {
  return (
    <>
      <Header />
      <NavBar />
      <div className={styles.adoptionContainer}>
        <h3 className={styles.heading3}>Frequently asked questions</h3>
        <AccordionComponent />
      </div>
      <Footer />
    </>
  );
}
