import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My SEO Website. All rights reserved.</p>
    </footer>
  );
}
