import styles from "./Cats.module.css";
import Header from "./Header";

export default function Cats() {
  return (
    <>
      <Header />
      <div className={styles.container}>CATS</div>
    </>
  );
}
