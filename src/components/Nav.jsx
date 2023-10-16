import { useRouter } from "next/router";
import styles from "../styles/navstyle.module.css";

export default function Nav() {
  const router = useRouter();

  const handleLocaleChange = () => {
    router.push(router.asPath, undefined, { locale: router.locale === "en" ? "ar" : "en" });
  };
  return (
    <main>
      <div className={styles.firstNav}>
        <div className={styles.phoneNumber}>
          <button
            className={styles.switchLanguageButton}
            onClick={handleLocaleChange}
          >
            {router.locale === "en" ? "عربى" : "English"}
          </button>
        </div>
      </div>
    </main>
  );
}
