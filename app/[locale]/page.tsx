import Section_1 from "@/[locale]/components/sections/main_page/section_1";
import Section_2 from "@/[locale]/components/sections/main_page/section_2";
import Section_3 from "@/[locale]/components/sections/main_page/section_3";
import Section_4 from "@/[locale]/components/sections/main_page/section_4";
import Section_5 from "@/[locale]/components/sections/main_page/section_5";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ru' },
  ];
}

export default function Home() {
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </>
  );
}
