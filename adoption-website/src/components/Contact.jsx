import Header from "./Header";
import NavBar from "./NavBar";
import styles from "./Contact.module.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <NavBar />
      <div className={styles.container}>
        <h2 className={styles.heading2}>Contact Us</h2>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
            />
            <textarea placeholder="Your Message" className={styles.textarea} />
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
