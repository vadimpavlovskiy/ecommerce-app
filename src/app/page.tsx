import HeaderLayout from "@/layouts/headerLayout/headerLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderLayout />
    </main>
  );
}
