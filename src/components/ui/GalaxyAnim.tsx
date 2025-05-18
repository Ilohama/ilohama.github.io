import styles from "./GalaxyAnim.module.scss";

export default function GalaxyAnimation() {
  return (
    <div className={styles.star_field}>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
    </div>
  );
}
