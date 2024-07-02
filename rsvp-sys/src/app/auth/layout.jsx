import styles from "./layout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div id={styles.outterDiv}>
      <div id={styles.main}>{children}</div>
    </div>
  );
}
