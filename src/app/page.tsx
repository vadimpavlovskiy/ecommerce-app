import HeaderLayout from "@/layouts/general-layouts/headerLayout/headerLayout";
import styles from "./page.module.css";
import SectionOneLayout from "@/layouts/page-layouts/homepage-layouts/sectionOneLayout/sectionOneLayout";
import SectionTwoLayout from "@/layouts/page-layouts/homepage-layouts/sectionTwoLayout/sectionTwoLayout";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderLayout />
      <SectionOneLayout />
      <SectionTwoLayout />
    </main>
  );
}
