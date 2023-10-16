import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../styles/nav2style.module.css'; // Correct import statement

export default function Nav2() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();
  const { t } = useTranslation();
  const currentPath = router.asPath;

  useEffect(() => {
    const currentItem = navItems.find(item => item.path === currentPath);
    if (currentItem) {
      setActiveLink(currentItem.name);
    }
  }, [currentPath]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navItems = [
    { name: "Contact", path: "/ContactUs" },
    { name: "About", path: "/AboutUs" },
    { name: "Articles", path: "/Blogs" },
    { name: "OurTeam", path: "/Our-Team" },
    { name: "OurClients", path: "/Our-Clients" },
    { name: "OurService", path: "/Our-Service" },
    { name: "StartYourBusniess", path: "/Start-Your-Business" },
    { name: "Home", path: "/", className: "homeMainPage" }
  ];

  return (
    <>
      <nav className={styles.stickyNav}> {/* Accessing the class from styles object */}
        <div className={styles.navElements}>
          <div className="nav-img-logo"> {/* You might want to convert this class as well */}
            
           
          </div>
          <div className={`${styles.navItemsContainer} ${isVisible ? "" : styles.hidden}`}> {/* Conditional class application */}
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`${styles.hoverPurple} ${item.className || ""} ${
                    activeLink === item.name ? styles.active : "" /* Conditional class application */
                  }`}
                  onClick={() => setActiveLink(item.name)}
                >
                  <Link  legacyBehavior href={item.path}>
                    <a className={`${styles.linkblue} ${styles.hoverPurple} ${activeLink === item.name ? styles.activeLink : ""}`}>{t(item.name)}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

