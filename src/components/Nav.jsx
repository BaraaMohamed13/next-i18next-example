import { useTranslation } from "next-i18next";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/navstyle.module.css";

export default function Nav() {
  const router = useRouter(); // Initialize useRouter
  const handleLocaleChange = () => {
    const currentLocale = router.locale;
    const newLocale = currentLocale === "en" ? "ar" : "en";
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const buttonText = router.locale === "en" ? "عربى" : "English";
  const { t } = useTranslation();

  return (
    <main>
    <div className={styles.firstNav}> {/* Change here */}
     
      <div className={styles.phoneNumber}> {/* Change here */}
       
        <button className={styles.switchLanguageButton} onClick={handleLocaleChange}>{buttonText}</button> {/* Change here */}
      </div>
    </div>
  </main>
  );
}
