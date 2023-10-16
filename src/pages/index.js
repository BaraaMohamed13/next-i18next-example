import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  return (
    <main>
      <Nav />
      <Nav2 />
    </main>
  );
}
