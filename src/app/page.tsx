import HeaderLayout from "@/layouts/general-layouts/headerLayout/headerLayout";
import SectionOneLayout from "@/layouts/page-layouts/homepage-layouts/sectionOneLayout/sectionOneLayout";
import SectionTwoLayout from "@/layouts/page-layouts/homepage-layouts/sectionTwoLayout/sectionTwoLayout";
import SectionThreeLayout from "@/layouts/page-layouts/homepage-layouts/sectionThreeLayout/sectionThreeLayout";

export default function Home() {
  return (
    <>
      <HeaderLayout />
      <SectionOneLayout />
      <SectionTwoLayout />
      <SectionThreeLayout />
    </>
  );
}
