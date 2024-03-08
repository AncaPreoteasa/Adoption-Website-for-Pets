import styles from "./Dogs.module.css";
import Header from "./Header";

export default function Dogs() {
  return (
    <>
      <Header />
      <div className={styles.container}>DOGS</div>
    </>
  );
}
