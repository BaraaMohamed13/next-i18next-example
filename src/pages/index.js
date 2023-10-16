import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Nav from "../components/Nav";
import Nav2 from "../components/Nav2";


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  
  const { t } = useTranslation();

  return (
    <main>
      <Nav />
      <Nav2/>

    </main>
  );
}
