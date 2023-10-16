import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "../styles/nav2style.module.css";

const navItems = [
  { name: "Contact", path: "/ContactUs" },
  { name: "About", path: "/AboutUs" },
  { name: "Articles", path: "/Blogs" },
  { name: "OurTeam", path: "/Our-Team" },
  { name: "OurClients", path: "/Our-Clients" },
  { name: "OurService", path: "/Our-Service" },
  { name: "StartYourBusniess", path: "/Start-Your-Business" },
  { name: "Home", path: "/", className: "homeMainPage" },
];
export default function Nav2() {
  const { t } = useTranslation();

  return (
    <nav className={styles.stickyNav}>
      <div className={styles.navElements}>
        <div className={styles.navItemsContainer}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{t(item.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
